import React from "react"
import logo from './logo.svg';
import './App.css';
import Cadastro from "./Cadastro"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <h1>App React</h1>
      <Cadastro/>       
      </header>
    </div>
  );
  
}

export default App;
