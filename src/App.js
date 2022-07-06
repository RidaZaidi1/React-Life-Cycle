import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
const [name,setname]=useState('zubair')
const [email,setemail]=useState('zubair@gmail.com')
const [student,setStudent]=useState([{
  name:'Zubair',
  class:'inter'
},
{
  name:'Asad',
  class:'inter'
}
])

const fun = ()=>{

  setname('Hassan')
  setemail('Hassan@gmail.com')
}

useEffect(()=>{
  console.log("Run Every Runder with update State")
})


useEffect(()=>{
  console.log("Render Only One Time")
},[]) 

useEffect(()=>{
  console.log("Render When Specific Variable Update")
},[name])

useEffect(()=>{
  return(
      console.log("Component Will Unmount")
  )
})
  return (
    <div className="App">
      <h1>Name : {name}</h1>
  <h3>Email : {email}</h3>
  <button onClick={()=>{fun()}}>Update Data</button>
  <ul>
    {student.map((v,i)=>{
      return <li>
        <h1>Student Name :{v.name}</h1>
        <h1>Class :{v.class}</h1>

      </li>

    })}
 
  </ul>
  
  
    </div>
  
  );
}

export default App;
