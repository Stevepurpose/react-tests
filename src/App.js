import { useState } from 'react';
import './App.css';
import Input from './Input';
import CheckboxWithLabel from './CheckboxWithLabel'
import Login from './Login';

function App() {
  const[showDiv,setShowDiv]=useState(true)
let labelOn='on'
let labelOff='off'



  return (
    <div className="App">
      <h1>Hello World.My first React Test</h1>
      <p>learn react</p>
      <Input showDiv={showDiv}/>
      <CheckboxWithLabel labelOn='on' labelOff='off'/>
      <Login/>
    
    </div>
  );
}

export default App;
