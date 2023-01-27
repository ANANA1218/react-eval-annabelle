import {Link, useParams , useNavigate} from "react-router-dom"
import {useEffect , useState , useContext} from "react"
import axios from "axios";
import { authContext } from "../../context/authContext";

const Single = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({})
    const {profil} = useContext(authContext);
    useEffect( () => {
        if(id){
            axios.get(`${import.meta.env.VITE_API}articles/${id}.json`)
            .then( reponse => {
                if(reponse.data) return setArticle(reponse.data)
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

    return ( <>
        <header className="d-flex justify-content-between align-items-center">
            <h1>{article.titre}</h1>
            {profil.isLogged && 
                <Link to={`/admin/article/update/${id}`} className="btn btn-success">
                    modifier l'article
                </Link>
            }
        </header>
        <div className="row p-0">
            <div className="col-8 article_contenu" >
               description : {article.description} <br/>
               developper : {article.developer}<br/>
               genre : {article.genre}<br/>
               publisher : {article.publisher}<br/>  
               release_date : {article.release_date}<br/>
               prix : {article.prix}<br/>
            
            </div>
            <figure className="col-4">
                <img src={article.img} alt="" className="img-thumbnail" />
            </figure>
        </div>
    </> );
}
 
export default Single;