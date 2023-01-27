import { useState , useEffect } from "react";
import axios from "axios"
import { useParams , useNavigate} from "react-router-dom"
export function useArticleID(){
    const [article, setArticle] = useState([])
    const {id} = useParams();
    useEffect( () => {
       
            axios.get(`${import.meta.env.VITE_API}articles/${id}.json`)
            .then( reponse => {
                const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setArticle(resultat)
            //console.log(resultat);
            // { "0" : { "auteur" : "Alain" , "texte" : "super article" }, "1" : { "auteur" : "Alain" , "texte" : "beau boulot" } }
            // [{ "auteur" : "Alain" , "texte" : "super article" } , ]
         })
    } , [article.length] )
    return [article, setArticle]  ; 
}