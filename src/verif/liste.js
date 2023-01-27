import Joi from "joi";

// super if 

export const contactVerif = Joi.object({
    email : Joi.string()
               .min(4)
               .max(255)
               .email({ tlds: { allow: false } })
               .required()
               .messages({
                    "string.min" : "le champ email doit contenir au minimum 4 lettres",
                    "string.email" : "le format de l'email n'est pas valide"
               }),
    message : Joi.string()
                  .min(4)
                  .max(1000)
                  .regex(/^[^<>]*$/)
                  .required()
                  .messages({
                    "string.pattern.base" : "le champ message ne peut pas contenir les caractères suivants : < >"
                  })
})



export const livraisonVerif = Joi.object({
    email : Joi.string()
               .min(4)
               .max(255)
               .email({ tlds: { allow: false } })
               .required()
               .messages({
                    "string.min" : "le champ email doit contenir au minimum 4 lettres",
                    "string.email" : "le format de l'email n'est pas valide"
               }),
    nom : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
    adresse : Joi.string().min(4).max(10000).regex(/^[^<>]*$/).required(),
    message : Joi.string()
                  .min(4)
                  .max(1000)
                  .regex(/^[^<>]*$/)
                  .required()
                  .messages({
                    "string.pattern.base" : "le champ message ne peut pas contenir les caractères suivants : < >"
                  })
})






export const identifiantVerif = Joi.object({
    login :  Joi.string()
                .min(4)
                .max(200)
                .email({ tlds: { allow: false } })
                .required(),
    password  : Joi.string()
                    .min(4)
                    .max(200)
                    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!?\.\\/;,\[\]]).{4,}$/)
                    .required()
                    .messages({
                        "string.pattern.base" : "le password doit contenir au minimum une majuscule, une minuscule, un chiffre et un caractère spécial"
                    })
})

// /^[^<>]*$/ accepter tous les caractères sauf les chevrons < > 

// dans un fichier lorsque une variable par défaut est locale 
const a = 30 ;

// la variable articleVerif est local et aussi globale => je peux l'utiliser dans un autre fichier 
// modules en javascript ES6 => comment partager des variables entre plusieurs fichiers 
// createContext useContext => state globale ($_SESSION)

// https://joi.dev/api
export const articleVerif = Joi.object({
    titre : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
    contenu : Joi.string().min(4).max(10000).regex(/^[^<>]*$/).required(),
    img  :  Joi.string().uri().required()
})
