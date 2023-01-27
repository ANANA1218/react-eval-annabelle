import { useState } from "react";
export const useAlert = ( schemaVerif ) => {
    const [ alerte , setAlerte ] = useState({})
    const getError = (data) => {
        const {error} =  schemaVerif.validate(data , {abortEarly : false})
        if(error) {
            // gérer les messages d'erreur 
            //console.log(error.details.map(m => m.type));
            const messagesErreur = error.details.map(m => m.message);
            setAlerte({ type : 'danger' , liste : messagesErreur });
            return true; 
        }
        return false ;
    }
    return [alerte , setAlerte , getError]
}