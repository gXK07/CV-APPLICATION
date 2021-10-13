import React from "react";

const InfoPerso = (props) => {
    return  <div className="CVchild" id="CVInfo">
        <div id="nom"> nom : {props.data[0]}</div>
        <div id="Prénom"> Prenom : {props.data[1]}</div>
        <div id="Age"> Age : {props.data[2]}</div>
        <div id="Adresse"> Adresse : {props.data[3]}</div>
        <div id="Email"> Email : {props.data[4]}</div>
        <div id="Numéro"> Numéro : {props.data[5]}</div>
        <div id="Site"> Site web : {props.data[6]}</div>
    </div>
}
const Formation = (props) => {
    let arrayFormation = new Array(props.data.length)
    arrayFormation.fill("")
    // On boucle sur les formations : {etablissament : "darius", titre : "bac", année = "2017"}
    for(let i=0; i<props.data.length; i++){
        //
        for(let p in props.data[i]){
        arrayFormation[i] = arrayFormation[i] + p + ": " + props.data[i][p];
        if(p !== "Année"){
            arrayFormation[i] = arrayFormation[i] + " | "
        }
    }
    }
    const to_Display = arrayFormation.map((x, i) => <div key={i}> Formation {i+ 1} : {x}</div>)
    console.log("arrayFormation : ", arrayFormation);
    return <div className="CVchild" id="CVFormation">
        {to_Display}
    </div>
}
const ExpPro = (props) => {
    let arrayExp = new Array(props.data.length)
    arrayExp.fill("")
    // On boucle sur les exp
    for(let i=0; i<props.data.length; i++){
        for(let p in props.data[i]){
            arrayExp[i] = arrayExp[i] + p + ": " + props.data[i][p];
        if(p !== "Année"){
            arrayExp[i] = arrayExp[i] + " | "
        }
    }
    }
    const to_Display = arrayExp.map((x, i) => <div key={i}> Expérience pro {i+ 1} : {x}</div>)
    return <div className="CVchild" id="CVExpPro">
        {to_Display}
    </div>
}


const Apropos = (props) => {
    return <div className="CVchild" id="CVApropos">
        Apropos : {props.data}
    </div>
}
const Competences = (props) => {
    let arrayCompetance = []
    for(let i=0; i<props.data.length; i++){
        arrayCompetance[i] = props.data[i].Competance;
    }
    let to_display = arrayCompetance.map((x, i) => <div key={i}> compétance {i+1} : {x}</div>)
    return <div className="CVchild" id="CVCompetences">{to_display}</div>
}


const CV = (props) => {
    return <div id="CV">
        <InfoPerso data={props.data.InfoPerso}/>
        <Formation data={props.data.Formation}/>
        <ExpPro data={props.data.ExpPro}/>
        <Apropos data={props.data.Apropos}/>
        <Competences data={props.data.Competences}/>
    </div>
}

export default CV