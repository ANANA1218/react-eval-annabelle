
import { Link } from "react-router-dom";
import { useParams , useNavigate} from "react-router-dom"
import {useEffect , useState , useContext} from "react"
import axios from "axios";
import { authContext } from "../../context/authContext";
import { db, fs } from '../../config/firebase'


function ProductDetail() {
    
    

    const {id} = useParams();
    const navigate = useNavigate();
    const [livraison, setLivraison] = useState({})

    const {profil} = useContext(authContext);
    useEffect( () => {
        if(id){
            axios.get(`${import.meta.env.VITE_API}livraison/${id}.json`)
            .then( reponse => {
                if(reponse.data) return setLivraison(reponse.data)
                // si l'id saisit dans l'url ne correspond à aucun article en 
                // base de données 
                // redirection vers une page 404 Not Found 
                navigate("/not-found")
            })
            .catch((ex) => {
                console.log(ex)
            })
        }
    }, [])


  


  return (
    <div className="container mt-5 py-4 px-xl-5">
     
     <h4> Bon de Commande </h4>
     <h8> Merci pour votre commande !</h8>
     <br/>
     <br/>
     <table className="table table-sm table-striped">
                <thead>
                    <tr>
                       
                        <th>id</th>
                        <th>produit</th>
                        <th>prix</th>
                    </tr>
                </thead>
                <tbody>
                   
                        
                            <td>{livraison.id}</td>
                            <td>{livraison.titre}</td>
                            <td>{livraison.prix}</td>
                           
                             
                                
                          
                   
                </tbody>
            </table>
            <br/>
           <br/>
           <br/>
        <br/>
        <br/>
        <br/>

     <h4> Detail de la commande</h4>

         
        Nom : {livraison.nom} 
        <br/>
        <br/>
        Email : {livraison.email}
        <br/>
        <br/>
        Adresse :{livraison.adresse}
        <br/>
        <br/>
        Commentaire: {livraison.message}

      </div>

      
   
  );
}

export default ProductDetail;
