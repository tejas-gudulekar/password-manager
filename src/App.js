
import './App.css';
import {useState, useEffect} from "react";
import { db } from './firebase_config';
import CredsItem from './Credentials';
import { Button, TextField } from '@material-ui/core';
import { TextFieldsOutlined, TextFieldsSharp, TextureOutlined } from '@material-ui/icons';


function App() {
  const [credentials, setCredentials] = useState([]);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
      getCreds();
  },[])

  function getCreds(){
    db.collection("passwords").onSnapshot(function (querySnapshot){
      setCredentials(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          websites : doc.data().website,
          pass: doc.data().password,
          isVisible: doc.data().isVisible,
        }))
      );
    })
  }

  function addCreds(event){
    console.log("Adding Password")
    db.collection("passwords").add({
      password : password,
      website: title,
      isVisible: false,
    });
    setTitle("");
    setPassword("");
  }

  return <div className="App">
  <div className="form">
    <h1>Password Manager</h1>
    <div class="form-group">
        <div class="">
            <TextField 
              style={{
                backgroundColor: "lightblue",
                width: "40%",
                fontWeight: '400',
                margin: '5px'
              }}
              type="text" 
              placeholder="Website Name" 
              value={title}
              onChange = {(event) => setTitle(event.target.value)}>
            </TextField>
        </div>

        <div class="">
            <TextField
            style={{
              backgroundColor: "lightblue",
              width: "40%",
              fontWeight: '400',
              margin: '20px',
              textDecorationColor: 'blue'
            }}
              type="text" 
              placeholder="Set Password" 
              onChange = {(event) => setPassword(event.target.value)}>
            </TextField>
        </div>  
        
        <div class="button">
            <Button
            style={{
              backgroundColor:"blue",
              textDecorationColor:"lightblue"
            }}
            variant="contained" 
            onClick={addCreds}>
            Add Credentials
            </Button>
        </div>
      </div>
    
   </div>
    <div className="container"> 
      <h1>Saved Passwords:</h1>
      {credentials.map((creds) => (
        <CredsItem 
        id ={creds.id}
        name={creds.websites} 
        passwords={creds.pass}  
        isVisible = {creds.isVisible}
        
        />
      ))}
         
    
      
    

  </div>
</div>
}

export default App;
