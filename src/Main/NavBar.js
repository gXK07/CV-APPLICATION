import React from "react";

const Select = (e) => {
    console.log(e.target)
}

const NavBar = () => {
    return <div className ="NavBar">
        <button className ="NavBarBtn" id="InfoPerso" onClick={Select}>
            Infomation Personelles
        </button>
        <button className ="NavBarBtn" id="Formation" onClick={Select}>
            Formation  
        </button>
        <button className ="NavBarBtn" id="ExpPro" onClick={Select}>
            Expériences Professionelles
        </button>
        <button className ="NavBarBtn" id="Apropos" onClick={Select}>
            À propos
        </button>
        <button className ="NavBarBtn" id="Competences" onClick={Select}>
            Compétences
        </button>
        <button className ="NavBarBtn" id="Preview" onClick={Select}>
            Preview
        </button>
    </div>
}

export default NavBar