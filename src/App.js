import React,{useState,useEffect} from 'react';
import {FormControl,Input,InputLabel} from "@material-ui/core";
import './App.css';
import db from "./firebase.js"
import Message from './Message';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const[input,setInput]=useState("") //this is just for the input field
  const [messages,setMessages]=useState([]);
  const[username,setUsername]=useState("");

  useEffect(()=>{
    db.collection('messages').orderBy("timestamp","desc").onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc  => ({id:doc.id,message:doc.data()})))
      //this is reading through the database 
    })

  },[])

  useEffect(() =>{
    setUsername(prompt("plese enter your name "));
  },[])


  const sendMessage=(e)=>{
    //all the logic to send the message goes here
    e.preventDefault(); 

    db.collection("messages").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput("");
 }

  return (
    <div className="App">
      <img  class="img-size" src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-HD-Image.png"/>
      
      <h2>Hello {username}</h2>

      
      <form className="app__form">

      <FormControl className="app__formControl">
       <InputLabel >Enter a message ....</InputLabel>
        <Input className="app__input" value={input} onChange={e => setInput(e.target.value)}/>

        <IconButton className="app__iconButton" variant="contained" disabled={!input} color="primary" type="submit" onClick={sendMessage} >
          <SendIcon/>
        </IconButton>
      </FormControl>
        
       
      </form>
      
      {/* input field */}
      {/* button */}
      {/* the messagesL */}
      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
          
      ))
      }
      </FlipMove>
      
     
    </div>
  );
}

export default App;
