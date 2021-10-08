import React from "react";
import NavBar from "./NavBar";
import InputFields from "./InputFields";

class Builder extends React.Component {
    constructor(){
        super()
        this.state = {
            field : "infoPerso",
        }
    }
    Select = (e) => {
        const toDisplay = e.target.id
        this.setState({
            field : toDisplay
        })
    }

    render(){
    return <div className ="Builder">
        <div className ="NavBar">
        <button className ="NavBarBtn" id="InfoPerso" onClick={this.Select}>
            Infomation Personelles
        </button>
        <button className ="NavBarBtn" id="Formation" onClick={this.Select}>
            Formation  
        </button>
        <button className ="NavBarBtn" id="ExpPro" onClick={this.Select}>
            Expériences Professionelles
        </button>
        <button className ="NavBarBtn" id="Apropos" onClick={this.Select}>
            À propos
        </button>
        <button className ="NavBarBtn" id="Competences" onClick={this.Select}>
            Compétences
        </button>
        <button className ="NavBarBtn" id="Preview" onClick={this.Select}>
            Preview
        </button>
    </div>
        <InputFields field={this.state.field}/>
    </div>
    }
}

export default Builder