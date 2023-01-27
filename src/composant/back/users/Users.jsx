import { Link } from "react-router-dom";
import { useState , useEffect } from "react"
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([])

    // const a = { nom : "Alain" , age : 2}
    // a.age
    // const { age } = a
    // age
    // function test (p){
    // p.largeur
    //}

    // function test ({largeur, hauteur}){
    // largeur
    //}
    // test({largeur : 20 , hauteur : 10})


    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}users.json`)
            .then( ({data}) => { 
                const usersFromAPI = []
                // { 0 : {} , 1 : {}} => [{},{}]
                for(let key in data){
                    usersFromAPI.push({...data[key] , id : key})
                }
                setUsers(usersFromAPI);
             }) 
    }, [] )

    return ( <>
        <header className="d-flex justify-content-between align-items-center mb-3">
            <h1>Gestion de profils utilisateurs</h1>
            <Link to="/admin/users/add" className="btn btn-success btn-sm">Nouveau profil</Link>
        </header>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>login</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { users.length === 0 ? 
                    <tr>
                        <td colSpan={3} className="text-center py-3">
                            aucun profil utilisateur pour l'instant
                        </td>
                    </tr>     :
                    <>
                        {users.map( user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2">modifier</button>
                                    <button className="btn btn-sm btn-danger">supprimer</button>
                                </td>
                            </tr>
                        } )}
                    </>
                }
            </tbody>
        </table>
    </> );
}
 
export default Users;