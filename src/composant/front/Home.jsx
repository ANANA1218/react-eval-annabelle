import { useEffect, useState } from "react";
import { db, fs } from '../../config/firebase'
import { useArticle } from "../../hook/useArticle";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
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

  const [articles] = useArticle()
  
  
  function addtocart(item) {


    articles.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true })

  }

    return (
    <div className='container mt-2'>
      <div className='row justify-content-center'>
        
        {articles.map((item) => (
          <div className='col-4' key={item.id}>
            <div className="card"  >
              <img src={item.img} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  {item.titre} -  {item.prix} €
                </h6>
                {
                  item.cart == false
                  &&
                  <button className='btn btn-primary' onClick={() => addtocart(item)}>
                    Ajouter au panier
                </button>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success' onClick={() => addtocart(item)}>
                    ajouter
                </button>
                }
                <br/>
                <br/>
                <Link to={`/article/${item.id}`} className="btn btn-dark">
                            Voir plus
                </Link> 
              </div>
            </div>
          </div>

        ))}

      </div>

    
    </div >
  );
}

export default App;