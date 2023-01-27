import { useRef , useEffect } from "react"
import { articleVerif } from "../../../verif/liste"
import { useAlert } from "../../../hook/useAlert";
import axios from "axios";
import Alert from "../../Alert";
import { useParams } from "react-router-dom"

const FormArticle = () => {
    const titreRef = useRef();
    const contenuRef = useRef();
    const imgRef = useRef();
    const [alerte, setAlerte, getError] = useAlert(articleVerif)
    const {id} = useParams()

    useEffect( () => {
        if(id){
            axios.get(`${import.meta.env.VITE_API}articles/${id}.json`)
                .then( (reponse) => {
                    const {titre , contenu , img }= reponse.data ;
                    titreRef.current.value = titre ;
                    contenuRef.current.value = contenu ;
                    imgRef.current.value = img ;
                } )
        }
    } , [])

    const handleSubmit = (e) => {
        // bloquer le rechargement automatique de la page 
        e.preventDefault();

        // récupérer les valeurs saisies
        const article = {
            titre : titreRef.current.value ,
            contenu : contenuRef.current.value,
            img  :  imgRef.current.value 
        }
       
        // vérifier qu'elles sont conformes 
        // si non conforme => message en dessous du formulaire + STOP 
        if(getError(article)) return ; 
        
        // si ok => essayer d'envoyer à l'api les données pour enregistrement 
        // via ajax (axios)
        if(!id) {
            // POST => ajouter une nouvelle ligne dans la base de données
            axios.post(`${import.meta.env.VITE_API}articles.json`, article)
            // si tout se passe bien => vider le formulaire et bandeau merci 
                .then(() => {
                    // vider le formulaire
                    e.target.reset()
                    setAlerte({type:"success", liste : ["article enregistré en bdd"]})
                })
                // si problème avec l'API => message probleme avec le serveur 
                .catch((ex) => {
                    console.log(ex);
                    setAlerte({type:"warning" , liste : ["problème pour enregistrer l'article sur le serveur"]})
                })
        } else {
            // else UPDATE 
            axios.put(`${import.meta.env.VITE_API}articles/${id}.json`, article)
            // si tout se passe bien => vider le formulaire et bandeau merci 
                .then(() => {
                    // vider le formulaire
                    // e.target.reset()
                    setAlerte({type:"info", liste : ["article mise à jour en bdd"]})
                })
                // si problème avec l'API => message probleme avec le serveur 
                .catch((ex) => {
                    console.log(ex);
                    setAlerte({type:"warning" , liste : ["problème pour enregistrer l'article sur le serveur"]})
                })
        }

    }
    

    return ( <>
        {!id ? 
            <h1 className="mb-3">Ajouter un nouvel article</h1> :
            <h1 className="mb-3">Modifier un article existant</h1>
        }
        
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3" placeholder="titre article"  ref={titreRef} />
            <textarea className="form-control mb-3" rows="10" placeholder="contenu principal de l'article" ref={contenuRef}></textarea>
            <input type="url" className="form-control mb-3" placeholder="url de l'image vedette" ref={imgRef} />
            <input type="submit" className="btn btn-dark"/>
        </form>
        <Alert alerte={alerte} />
    </> );
}
 
export default FormArticle ;