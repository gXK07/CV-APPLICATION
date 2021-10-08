import React from "react";
import InputFields from "./InputFields";

class Builder extends React.Component {
    constructor(){
        super()
        this.state = {
            field : "InfoPerso",
            preview : undefined,
            class : {
                InfoPerso : "fieldFocus",
                Formation : "",
                ExpPro : "",
                Apropos : "",
                Competences : "",
            }
        }
    }

    changeFocus = (obj, id, toAdd) => {
        for (let Prp in obj){
            if(Prp === id){
                obj[Prp] = toAdd;
            }
            else {
                obj[Prp] = "";
            }
        }
        return obj
    }


    Select = (e) => {
        const toDisplay = e.target.id
        this.setState({
            field : toDisplay,
            class : this.changeFocus(this.state.class, e.target.id, "fieldFocus")
        })
    }

    Preview = () => {
            this.setState({
                preview : 1,
            })
    }

    render(){
    return <div className ="Builder">
        <div className ="NavBar">
        <button className = {this.state.class.InfoPerso} id="InfoPerso" onClick={this.Select}>
            Infomations
        </button>
        <button className = {this.state.class.Formation} id="Formation" onClick={this.Select}>
            Formation  
        </button>
        <button className = {this.state.class.ExpPro} id="ExpPro" onClick={this.Select}>
            Expériences
        </button>
        <button className = {this.state.class.Apropos} id="Apropos" onClick={this.Select}>
            À propos
        </button>
        <button className = {this.state.class.Competences} id="Competences" onClick={this.Select}>
            Compétences
        </button>
        <button className ="NavBarBtn" id="Preview" onClick={this.Preview}>
            Preview
        </button>
    </div>
        <InputFields field={this.state.field}/>
    </div>
    }
}

export default Builder