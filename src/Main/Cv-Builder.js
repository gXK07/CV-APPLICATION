import React from "react";
import InputFields from "./InputFields";
import CV from "../CV/CV.js"
import cross from "../Images/delete.png"
import newObj from "./Factory";


// J'ai un peu la flemme mais il faut créer une variable qui décrit l'avancement du
// field, par exemple pour "infoperso", dire si les infos on étés sauvegardés, en fonction 
// afficher une fenetre de validation. Pour formation, expériences et compétence, il faut 
// créer un boutton "+" qui va envoyer la date dans this.state.data.lefieldenquestion et l'afficher
// ensuite dans le field correspondant. 

// this.state.data est envoyé dans preview quand on le demande et on affiche une fenetre
// avec la data. download, déclanche une fentre qui permet de telecharger le doc fini.

class Builder extends React.Component {
    constructor(){
        super()
        this.state = {
            field : {
                wich : "InfoPerso",
                etat : {
                    InfoPerso : false,
                    Formation : [],
                    ExpPro : [],
                    Apropos : false,
                    Competences : [],
                }
            },
            preview : undefined,
            class : {
                InfoPerso : "fieldFocus",
                Formation : "",
                ExpPro : "",
                Apropos : "",
                Competences : "",
            },
            data : {
                InfoPerso : [],
                Formation : [],
                ExpPro : [],
                Apropos : [],
                Competences : [],
            },
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
            field : {
                wich : toDisplay,
                etat : this.state.field.etat
            },
            class : this.changeFocus(this.state.class, e.target.id, "fieldFocus")
        })
    }

    add =(e, field) => {
        e.preventDefault();
        let to_push = newObj(field);
        let count = 0;
        for(let p in to_push){
            to_push[p] = e.target[count].value;
            count++;
        }
        let obj = this.state.data;
        for (let Prp in obj){
            if(Prp === field){
                obj[Prp].push(to_push);
            }
        }
        console.log("new state.data : ", obj);
    }

    Preview = () => {
        const Delete = () => {
            this.setState({
                preview : undefined
            })
        }
            this.setState({
                preview : <div>
                    <CV data={this.state.data}/>
                    <button onClick= {Delete} id="delete">
                        <img src={cross} alt="delete"></img>
                    </button>
                    </div>,
            })
    }

    save = (e) => {
        e.preventDefault()
        let data = []
        for(let i =0; i<7; i++){
        data.push(e.target[i].value)
        }
        this.setState({
            field : {
                wich : this.state.field.wich,
                etat : {
                    InfoPerso : true,
                    Formation : this.state.field.etat.Formation,
                    ExpPro : this.state.field.etat.ExpPro,
                    Apropos : this.state.field.etat.Apropos,
                    Competences : this.state.field.etat.Competences,
                }
            },
            data : {
                InfoPerso : data,
                Formation : this.state.data.Formation,
                ExpPro : this.state.data.ExpPro,
                Apropos : this.state.data.Apropos,
                Competences : this.state.data.Competences,
            }
        })
        console.log(this.state)
        e.target.reset();
    }

    saveAbout = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        this.setState({
            field : {
                wich : this.state.field.wich,
                etat : {
                    InfoPerso : this.state.field.etat.InfoPerso,
                    Formation : this.state.field.etat.Formation,
                    ExpPro : this.state.field.etat.ExpPro,
                    Apropos : true,
                    Competences : this.state.field.etat.Competences,
                }
            },
            data : {
                InfoPerso : this.state.data.InfoPerso,
                Formation : this.state.data.Formation,
                ExpPro : this.state.data.ExpPro,
                Apropos : e.target[0].value,
                Competences : this.state.data.Competences,
            }
        })
    }

    render(){
    return <div className ="Builder">
        {this.state.preview}
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
        <button id="Download">Download</button>
    </div>
        <InputFields field={this.state.field} save={this.save} 
        saveAbout={this.saveAbout} add={this.add} data={this.state.data}
        />
    </div>
    }
}

export default Builder