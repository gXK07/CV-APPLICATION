import React from "react";


// Ce component va recupérer en props, l'id de la section à afficher, 
// reste plus qu'a construire les sections en question avec les input et tout
const InputFields = (props) => {
    return <div className ="InputFields">InputFields : {props.field}</div>
}

export default InputFields