import React from 'react';
import { useEffect, useState } from "react";
import { db, fs } from '../../config/firebase'
import { useArticle } from "../../hook/useArticle";
import axios from "axios";
import {useRef} from "react"
import { livraisonVerif } from "../../verif/liste";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";

const Panier = () => {


    const emailRef = useRef();
    const nomRef = useRef();
    const adresseRef = useRef();
    const titreRef= useRef();
    const descriptionRef= useRef();
    const developerRef= useRef();
    const  genreRef= useRef();
    const imgRef= useRef();
    const  prixRef= useRef();
    const publisherRef= useRef();
    const quantityRef= useRef();
    const totalRef= useRef();
    const release_dateRef= useRef();
    const messageRef = useRef();

    const [alerte , setAlerte , getError] = useAlert(livraisonVerif)
    const handleSubmit = (e) => {
        e.preventDefault();
        const demande = {
            email : emailRef.current.value ,
            nom : nomRef.current.value ,
            adresse : adresseRef.current.value ,
            cart:articles.id,
            message : JSON.stringify(messageRef.current.value)
        }
        
        if(getError(demande)) return ; 
        
        // envoyer les données saisies dans l'API pour enregistrement 
        axios.post(`${import.meta.env.VITE_API}livraison.json`, demande)
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
    function removetocart(item) {

        articles.map((i) => {
          if (i.id == item.id) {
            i.cart = false
          }
        })
        db.collection('cart').doc(`${item.id}`).delete()
    
      }
    function increase(item) {
        db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))
    
      }
      function decrease(item) {
        db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
      }
      function total() {
        let x = 0
        cart.map((i) => {
          x += i.prix * i.quantity
    
        })
        return x
      }



    return (
        <div>
              <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.img} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.titre}</td>
                  <td>
                    {i.prix}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {total()}</h4>
         
                 
        </div>
      </div>
      <>
      <h1>Votre Profil</h1>
        <p>Besoin d'informations pour la livraison, veuillez compléter le formulaire suivant :</p>
        <div className="row">
            <form onSubmit={handleSubmit} className="col-6">
           
            <tbody ref={cart} onFocus={handleFocus}>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.img} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.titre}</td>
                  <td>
                    {i.prix}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>



                <input type="email" 
                    placeholder="votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}/>
                <input type="nom" 
                    placeholder="votre Nom"  
                    className="form-control mb-3" 
                    ref={nomRef}
                    onFocus={handleFocus}/>
                <input type="adressd" 
                    placeholder="votre adresse"  
                    className="form-control mb-3" 
                    ref={adresseRef}
                    onFocus={handleFocus}/>  
                <textarea  
                    placeholder="votre commentaire" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}></textarea>
                <input type="submit" className="btn btn-dark" />
            </form>
            
        </div>
        
        <Alert alerte={alerte} />
      </>
        </div>
    );
};

export default Panier;