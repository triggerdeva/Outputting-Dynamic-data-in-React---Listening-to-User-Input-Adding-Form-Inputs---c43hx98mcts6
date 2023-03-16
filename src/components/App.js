import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const[name, setName]=useState("");
const[printName, setPrintName]=useState(false)
const handleChange=(e)=>{
  setName(e.target.value);
}
const fixOutput = ()=>{
  setPrintName(true);
}
  return (
    <div id="main">
      <input id='input' onChange={handleChange}></input>
      <button id='button' onClick={fixOutput}>Click</button>
      <p id='text'> Hello my name is {printName? name : "____"} and I study at Newton School</p>
    </div>
  )
}


export default App;
