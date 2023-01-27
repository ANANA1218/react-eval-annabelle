import { createContext , useState } from "react"
export const authContext = createContext();
export const AuthContextProvider = ({children}) => {
    let data = {};
    if(localStorage.getItem("auth")) data = JSON.parse(localStorage.getItem("auth"))
    const [profil, setProfil] = useState(data)
    const login = ({login, password}) => {
        const p = {...profil , isLogged : true};
        localStorage.setItem("auth" , JSON.stringify(p))
        setProfil(p)
    }
    const logout = () => {
        localStorage.removeItem("auth")
        setProfil({...profil , isLogged : false})
    }
    return <authContext.Provider value={{profil , login, logout, setProfil}}>
        {children}
    </authContext.Provider>
}

// value={{a: 1, b : 2}}
// const value = {a: 1, b : 2}