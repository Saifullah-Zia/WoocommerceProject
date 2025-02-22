import { useEffect, useState } from 'react';
import axios from 'axios';
import Customhok from './Components/Customhok';
import './App.css'

function App() {
  const [count, setCount]=useState(0);
  const[name, setName]=useState("");
  Customhok(`${name} clicked ${count} times`);

  // get user details using axios
  const [users, getUsers]=useState([]);

  useEffect(()=>{
    async function getUser() {
      const result= await axios('https://jsonplaceholder.typicode.com/users');
      getUsers(result.data);
      
    }
    getUser();
    
  });

 

  return (
    <>
    {/* class component  1 component did mount  2 component did update 3 component will unmount */}
    <input onChange={(e)=> setName(e.target.value)}></input>
      <h1>{name} clicked {count} times</h1>
      <button onClick={()=> setCount(count+1)}>increment</button>

      {/* getting user data in the list */}

      {/* <ul>
      {users.slice(0,3).map((list) => (
  <li key={list.id}>{list.name}</li>
))}

      </ul> */}
      
    </>
  )
}

export default App
