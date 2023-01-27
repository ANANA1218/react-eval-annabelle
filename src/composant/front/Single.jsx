
import { Link } from "react-router-dom";
import { useParams , useNavigate} from "react-router-dom"
import {useEffect , useState , useContext} from "react"
import axios from "axios";
import { authContext } from "../../context/authContext";
import { db, fs } from '../../config/firebase'
import { useArticleID } from "../../hook/useArticleID";

function ProductDetail() {
    useEffect(() => {
        db.collection("cart")
          .onSnapshot((querySnapshot) => {
            var p = [];
            querySnapshot.forEach((doc) => {
              p.push(doc.data());
              articles.map((i) => {
                if (i.id == doc.data().id) {
                  i.cart = true
                }
              })
            });
    
            setCart(p)
          });
    
      }, []);
      const [cart, setCart] = useState([])
    

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


    function addtocart(item) {


        articles.map((i) => {
          if (i.id == item.id) {
            i.cart = true
          }
        })
    
        db.collection('cart').doc(`${item.id}`).set(item, { merge: true })
    
      }

   


  return (
    <div className="container mt-5 py-4 px-xl-5">
     
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/">
              All Games
            </Link>
          </li>
         
          <li className="breadcrumb-item active" aria-current="page">
            
          {article.titre}

          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              


            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={article.img}
              />
              
            </div>
          </div>

          
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{article.titre}</h2>
            <h4 className="text-muted mb-4">{article.prix} €</h4>

            
            <div className="row g-3 mb-4">
              <div className="col">
             
             

              </div>
             
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Developper</dt>
              <dd className="col-sm-8 mb-3">{article.developer}</dd>

              <dt className="col-sm-4">Genre</dt>
              <dd className="col-sm-8 mb-3">{article.genre}</dd>

              <dt className="col-sm-4">Publisher</dt>
              <dd className="col-sm-8 mb-3">{article.publisher}</dd>

              <dt className="col-sm-4">Release Date </dt>
              <dd className="col-sm-8 mb-3"> {article.release_date}</dd>

              
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              {article.description}
              </small>
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ProductDetail;
