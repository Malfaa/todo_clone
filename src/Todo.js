import React from 'react';
import { List , ListItem, ListItemText , Button } from '@material-ui/core';
import './Todo.css';
import db from './firebase'
//import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// FIXME: arrumar DeleteForever

function Todo(props) {


  return (

    <List className = 'todo'>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary = "Todo"/>
      </ListItem>
      <Button id='botaoDel' onClick = {event=> db.collection('todos').doc(props.todo.id).delete()}>
        Delete
      </Button>

    </List>
  )
}

export default Todo;
