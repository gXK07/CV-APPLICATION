const newObj = (type) => {
    if(type === "Formation")
    return {
        Etablissemnt : "",
        Titre : "",
        Année : 2000,
    }
    else if(type === "ExpPro")
    return {
        Entreprise : "",
        Poste : "",
        Description_Poste : "",
        Année : 2000,
    }
    else if(type === "Competences")
    return {
        Competance : ""
    }
}



export default newObj;