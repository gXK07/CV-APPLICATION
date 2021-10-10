import React from "react";
import logo from '../logo.svg';

const Home = () => {
    return <div className ="Home">
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input id="searchBar"/>
        <button id="signUp">Sign Up</button>
        <button id="Login">Log in</button> */}
        </header>
        <h1>Le meilleur générateur de CV <br/>d'Internet</h1>
        <h2>Mon premier project en React.</h2>
        {/* <button id="createCV">Créer un CV</button>
        <img src={Img_Home} alt="Hand Drawing"/> */}
    </div>
}

export default Home