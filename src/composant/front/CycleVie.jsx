import { useEffect, useState } from "react"

const CycleVie = () => {

    const [nb, setNb] = useState(0)
    // 1ère manière useEffect deuxième paramètre []
    // le callback (le 1er paramètre) ne s'exécute que lorsque le composant est monté => que 1 seule fois lors du changement du composant 
    // utilisé uniquement requête pour remplir le state 
    // Home // Dashboard 
    useEffect( () => {
        console.log("manière 1")
    }, [])

    // 2ème manière deuxième paramètre [] et 
    // le callback return une fonction 
    // la fonction exécutée dans le return du callback exécutée uniquement lorsque le composant est démonté => supprimé du DOM 
    useEffect( () => {
        return () => {
            console.log("manière 2")
        }
    }, [])
    // 3ème manière deuxième paramètre [remplit avec variable] 
    // la fonction en 1er paramètre exécuté uniquement lorsque la variable va être modifiée => le call back peut être exécuté PLUSIEURS (autant de fois que la variable est modifiée ) 
    // updated 
    useEffect( () => {
        if(nb > 0) console.log("manière 3")
    }, [nb])
    return ( <>
        <h1>Cycle vie</h1>
        <button onClick={() => setNb(nb+ 1)}>modifier nb</button>
    </> );
}
 
export default CycleVie;

// composant dispose d'une cycle de vie 
// 3 états dans le cycle 
// mounted : lorsque le composant est chargé dans le DOM
// updated : lorsque une props / le state du composant est modifié
// unmounted : le composant disparait du DOM

// chacun de ces etats => vous pouvez exécuter une action (fonction)
// utiliser le hook, useEffect() => Effect => sideEffect => effet secondaire 

// useEffect( () => {} , [] )
// contient 2 paramètres => callback
// contient 2 paramètres => tableau => tableau des dépendances 

// contient 2 paramètres et 3 manières l'utiliser