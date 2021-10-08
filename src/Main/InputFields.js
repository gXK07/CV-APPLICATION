import React from "react";


// Ce component va recupérer en props, l'id de la section à afficher, 
// reste plus qu'a construire les sections en question avec les input et tout


const InfoPers = () => {
    return <div className="InfoPers">
        <form id="InfoPers">
            <input placeholder ='Nom : Dupont'></input>
            <input placeholder ='Prenom : Julien'></input>
            <input placeholder ='Âge : 23 ans'></input>
            <input placeholder ='Adresse : 12 rue de la Paix'></input>
            <input placeholder ='Email'></input>
            <input placeholder ='Numéro : 06 73 56 23 15'></input>
            <input placeholder ='www.website.com'></input>
        </form>
    </div>
}
const Formation = () => {
    return <div id="Formation">
            <input placeholder ='Etablissement'></input>
            <input placeholder ='Titre'></input>
            <input placeholder ='Année'></input>
    </div>
}
const Exp = () => {
    return <div id="Exp">
            <input placeholder ='Entreprise'></input>
            <input placeholder ='Poste'></input>
            <input placeholder ='Description Poste'></input>
            <input placeholder ='Année'></input>
    </div>
}
const About = () => {
    return <div id="About">
            <input placeholder ='À propos'></input>
    </div>
}
const Competences = () => {
    return <div id="Competences">
        <input placeholder ='Compétence'></input>
    </div>
}

const InputFields = (props) => {
    let field = <InfoPers/>;
    if(props.field === "InfoPerso")
    field = <InfoPers/>
    else if(props.field === "Formation")
    field = <Formation/>
    else if(props.field === "ExpPro")
    field = <Exp/>
    else if(props.field === "Apropos")
    field = <About/>
    else if(props.field === "Competences")
    field = <Competences/>
    return <div id='InputFields'>
        {field}
    </div>
}

export default InputFields