import React from "react";
import check from "../Images/check.png"
import plus from '../Images/Plus.png'


const InfoPers = (props) => {
    console.log(props.etat)
    if(props.etat){
        return <img src={check} alt="check"></img>
    }
    else{
    return <div className="InfoPers">
        <form id="InfoPers" onSubmit={props.save}>
            <input placeholder ='Nom : Dupont'></input>
            <input placeholder ='Prenom : Julien'></input>
            <input placeholder ='Âge : 23 ans'></input>
            <input placeholder ='Adresse : 12 rue de la Paix'></input>
            <input placeholder ='Email'></input>
            <input placeholder ='Numéro : 06 73 56 23 15'></input>
            <input placeholder ='www.website.com'></input>
            <button type="submit">Save</button>
        </form>
    </div>
    }
}
const Formation = (props) => {
    return (
        <div>
        <div>{props.data}</div>
        <form id="Formation" onSubmit={(e) => {props.add(e, "Formation")}}>
            <input placeholder ='Etablissement'></input>
            <input placeholder ='Titre'></input>
            <input placeholder ='Année'></input>
            <button type="submit">
                <img src={plus} alt="add"></img>
            </button>
    </form>
    </div>
    )
}
const Exp = (props) => {
    
    return (
    <div>
    <div>{props.data}</div>
    <form id="Exp" onSubmit={(e) => {props.add(e, "ExpPro")}}>
            <input placeholder ='Entreprise'></input>
            <input placeholder ='Poste'></input>
            <input placeholder ='Description Poste'></input>
            <input placeholder ='Année'></input>
            <button type="submit">
                <img src={plus} alt="add"></img>
            </button>
    </form>
    </div>
    )
}
const About = (props) => {
    if(props.etat){
        return <img src={check} alt="check"></img>
    }
    else{
    return <form id="About" onSubmit={props.saveAbout}>
            <input placeholder ='À propos'></input>
            <button type="submit">Save</button>
    </form>
    }
}
const Competences = (props) => {
    console.log(props);
    return (
    <div>
    <div>-----------</div>
    <form id="Competences" onSubmit={(e) => {props.add(e, "Competences")}}>
        <input placeholder ='Compétence'></input>
        <button type="submit">
                <img src={plus} alt="add"></img>
        </button>
    </form>
    </div>
    )
}

const InputFields = (props) => {
    let field = <InfoPers save={props.save} etat={props.field.etat.InfoPerso}/>;
    if(props.field.wich === "InfoPerso")
    field = <InfoPers save={props.save} etat={props.field.etat.InfoPerso}/>
    else if(props.field.wich === "Formation")
    field = <Formation add={props.add} data={props.data.Formation}/>
    else if(props.field.wich === "ExpPro")
    field = <Exp  add={props.add} data={props.data.ExpPro}/>
    else if(props.field.wich === "Apropos")
    field = <About etat={props.field.etat.Apropos} saveAbout={props.saveAbout}/>
    else if(props.field.wich === "Competences")
    field = <Competences add={props.add} data={props.data.Competences}/>
    return <div id='InputFields'>
        {field}
    </div>
}

export default InputFields