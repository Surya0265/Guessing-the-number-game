import {useState} from 'react'
import './App.css';
import Result from './result';


const secretnumber=Math.floor(Math.random()*10)+1

function App() {
     const [term,setterm]=useState("")
     const handlechange=(e)=>{
      setterm(e.target.value)
     }
  return (
    <>
    <div className='container'>
      <div className='header'>
        <label htmlFor='term'>
        Guess the number between 1 to 10
        </label>
          
      </div>
      <div>
      <form >
        <input id='term' className='get' type='text' name='term'
        onChange={handlechange}/>
        <Result secretnumber={secretnumber} term={term}/>

      </form>
      </div>
      

      </div>
    </>
    
)}

export default App;
