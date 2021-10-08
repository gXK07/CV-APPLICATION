import React from "react";
import Img_Home from "../Images/Img_Home.png"
import eth_icon from "../Images/eth_Icon.png"

const Home = () => {
    return <div className ="Home">
        <header>
        <img src={eth_icon} alt="logo"/>
        <input id="searchBar"/>
        <button id="signUp">Sign Up</button>
        <button id="Login">Log in</button>
        </header>
        <h1>Le meilleur générateur de CV <br/>d'Internet</h1>
        <h2>  Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <button id="createCV">Créer un CV</button>
        <img src={Img_Home} alt="Hand Drawing"/>
    </div>
}

export default Home