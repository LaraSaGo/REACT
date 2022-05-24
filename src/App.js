//import logo from './logo.svg';
//import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import Formulario from "./Componentes/form"


function App() {
    return (
      <div className="App">
      <Formulario></Formulario>
      </div>
    );
}
//<Router>
//<Route exact path="./Componentes/form" component={Formulario} />
//</Router>
export default App;
