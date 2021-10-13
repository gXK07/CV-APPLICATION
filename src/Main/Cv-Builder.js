import React, { useState } from "react";
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

const Builder = () => {
       const [field, setfield] = useState({
            wich : "InfoPerso",
            etat : {
                InfoPerso : false,
                Formation : [],
                ExpPro : [],
                Apropos : false,
                Competences : [],
            }
        });
        const [preview, setpreview] = useState(undefined);
        const [Class, setClass] = useState({
            InfoPerso : "fieldFocus",
            Formation : "",
            ExpPro : "",
            Apropos : "",
            Competences : "",
        });
        const [data, setdata] = useState({
            InfoPerso : [],
            Formation : [],
            ExpPro : [],
            Apropos : [],
            Competences : [],
        });

        const changeFocus = (obj, id, toAdd) => {
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

        const Select = (e) => {
            const toDisplay = e.target.id
            setfield({
                    wich : toDisplay,
                    etat : field.etat
            })
            setClass(changeFocus(Class, e.target.id, "fieldFocus"))
        }

        const add =(e, field) => {
            e.preventDefault();
            let to_push = newObj(field);
            let count = 0;
            for(let p in to_push){
                to_push[p] = e.target[count].value;
                count++;
            }
            let obj = data;
            for (let Prp in obj){
                if(Prp === field){
                    obj[Prp].push(to_push);
                }
            }
            console.log("new state.data : ", obj);
        }

        const Preview = () => {
            const Delete = () => {
                setpreview(undefined)
            }
            setpreview(
                <div>
                    <CV data={data}/>
                    <button onClick= {Delete} id="delete">
                        <img src={cross} alt="delete"></img>
                    </button>
                </div>
            )
        }



        const save = (e) => {
            e.preventDefault()
            let newData = []
            for(let i =0; i<7; i++){
            newData.push(e.target[i].value)
            }
            setfield({
                wich : field.wich,
                etat : {
                    InfoPerso : true,
                    Formation : field.etat.Formation,
                    ExpPro : field.etat.ExpPro,
                    Apropos : field.etat.Apropos,
                    Competences : field.etat.Competences,
                }
            })
            setdata({
                InfoPerso : newData,
                Formation : data.Formation,
                ExpPro : data.ExpPro,
                Apropos : data.Apropos,
                Competences : data.Competences,
            })
            e.target.reset();
        }

        const saveAbout = (e) => {
            e.preventDefault();
            setfield({
                wich : field.wich,
                etat : {
                    InfoPerso : field.etat.InfoPerso,
                    Formation : field.etat.Formation,
                    ExpPro : field.etat.ExpPro,
                    Apropos : true,
                    Competences : field.etat.Competences,
                }
            })
            setdata({
                InfoPerso : data.InfoPerso,
                Formation : data.Formation,
                ExpPro : data.ExpPro,
                Apropos : e.target[0].value,
                Competences : data.Competences,
            })
            e.target.reset();
        }
        
        return (
            <div className ="Builder">
            {preview}
            <div className ="NavBar">
            <button className = {Class.InfoPerso} id="InfoPerso" onClick={Select}>
                Infomations
            </button>
            <button className = {Class.Formation} id="Formation" onClick={Select}>
                Formation  
            </button>
            <button className = {Class.ExpPro} id="ExpPro" onClick={Select}>
                Expériences
            </button>
            <button className = {Class.Apropos} id="Apropos" onClick={Select}>
                À propos
            </button>
            <button className = {Class.Competences} id="Competences" onClick={Select}>
                Compétences
            </button>
            <button className ="NavBarBtn" id="Preview" onClick={Preview}>
                Preview
            </button>
            <button id="Download">Download</button>
        </div>
            <InputFields field={field} save={save} 
            saveAbout={saveAbout} add={add} data={data}
            />
        </div>
        )
        
}

export default Builder