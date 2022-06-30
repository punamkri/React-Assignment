import React from "react";
import Header from "./Component/Header" ;
import Main from "./Component/Main";
import Icon from './Component/Icon'
import Cardfile from './Component/Cardfile'
import TextBar from "./Component/TextBar";
import CardText from "./Component/CardText.js";
import Form from "./Component1/Form.js"

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Icon/>
      <Cardfile/>
      <TextBar/>
      <CardText/>
      <Form/>
    </div>
  );
}

export default App;
