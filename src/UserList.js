import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function UsersList() {
    const [users, setUsers]= useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[])



    return (
   <div>
  <h1>LIST OF USERS</h1>
        <div className="cards">
 {users.map(el=>
    <div classNAme='card'>
        <Card style={{ width: '18rem' }}>
  <Card.Img  src="./profilePicture.jpg" />
  <Card.Body>
    <Card.Title style={{color:'blue'}}>{el.name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Username: {el.username}</ListGroupItem>
    <ListGroupItem>EMail: {el.email}</ListGroupItem>
    <ListGroupItem>Address: {el.address.street}, {el.address.suit}, {el.address.city}. </ListGroupItem>
    
  </ListGroup>

</Card>

    </div>
    )}

        </div>
   </div>
    )
}

export default UsersList;