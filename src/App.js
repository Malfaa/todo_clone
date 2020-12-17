import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc =>({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);


  const addTodo = (event) =>{
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    console.log("fucionante");
    setTodos([...todos, input]);
    setInput('');
  }

  document.body.style = 'background : #f7f5f5';

  // FIXME: arrumar aqui o max de digitos pelo tamanho do card
  return (
    <div className="App">
      <h1>TODO List</h1>

      <form>
        <FormControl>
          <InputLabel>Escreva seu TODO</InputLabel>
          <Input margin='dense' multiline='true'  value ={input}
            onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <br/>

        <Button id="botao" disabled= {!input} type= 'submit' onClick={addTodo}
        variant="contained" color="primary">
        Add Todo
        </Button>
      </form>

      <div>
        {todos.map(todo =>(
          <Todo todo={todo}/>
        ))}
      </div>


    </div>
  );
}

export default App;
