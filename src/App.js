import React from "react";
import Home from "./Main/Home"
import Footer from "./Main/Footer"
import Builder from "./Main/Cv-Builder.js"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      field : "info Perso",
    }
  }

  render(){
  return (
    <div className = "App">
      <Home/>
      <Builder/>
      <Footer/>
      </div>
  );
  }
}

export default App;
