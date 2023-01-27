import axios from "axios";
import {useRef} from "react"
import { contactVerif } from "../../verif/liste";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";
import mario from "../../images/mario.png"

const Contact = () => {
    const emailRef = useRef();
    const messageRef = useRef();
    const [alerte , setAlerte , getError] = useAlert(contactVerif)
    const handleSubmit = (e) => {
        e.preventDefault();
        const demande = {
            email : emailRef.current.value ,
            message : JSON.stringify(messageRef.current.value)
        }
        
        if(getError(demande)) return ; 
        
        // envoyer les données saisies dans l'API pour enregistrement 
        axios.post(`${import.meta.env.VITE_API}contact.json`, demande)
             .then(reponse => {
                // vider le formulaire
                e.target.reset();
                // message pour remercier l'utilisateur 
                setAlerte({type : "success" , liste : ["🛸 le message est bien enregistré"] }) 
             })
             .catch(ex => setAlerte({type : "warning" , liste : ["erreur lors de l'enregistrement du message"]}))
    }
    const handleFocus = () => {
        setAlerte({});
    }

    return ( <>
        <h1>Nous contacter</h1>
        <p>Besoin d'informations, veuillez compléter le formulaire suivant :</p>
        <div className="row">
            <form onSubmit={handleSubmit} className="col-6">
                <input type="email" 
                    placeholder="votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}/>
                <textarea  
                    placeholder="votre message" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}></textarea>
                <input type="submit" className="btn btn-dark" />
            </form>
            <figure className="col-6">
                <img src={mario} alt="" className="img-fluid img-thumbnail" />
            </figure>
        </div>
        
        <Alert alerte={alerte} />
    </> );
}
 
export default Contact;

// dans le composant COntact
// ajouter un formulaire deux champs 
// email 
// commentaire 
// récupérer les valeurs saisies dans le formulaire 
// message d'erreur en cas d'erreur de saisie
// enregistrer les valeurs saisies dans notre base de données (API)
// message de remerciement
// reset du formulaire