import { useState , useEffect } from "react";
import axios from "axios"

export function useArticle(){
    const [articles, setArticles] = useState([])
    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}articles.json`)
         .then( reponse => {
            const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setArticles(resultat)
            //console.log(resultat);
            // { "0" : { "auteur" : "Alain" , "texte" : "super article" }, "1" : { "auteur" : "Alain" , "texte" : "beau boulot" } }
            // [{ "auteur" : "Alain" , "texte" : "super article" } , ]
         })
    } , [articles.length] ) // exécute que lorsque la page est chargé et update

    /* useEffect( () => { // lorsque je modifie le nombre d'article (DELETE)
        
    } , [])  */

    return [articles, setArticles]  ; 
}