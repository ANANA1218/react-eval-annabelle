import { useOrder } from "../../hook/useOrder";
import { Link } from "react-router-dom"
import axios from "axios";

const Dashboard = () => {

    const [order, setOrder] = useOrder()



    const handleSupprimer = (id) => {
        axios.delete(`${import.meta.env.VITE_API}order/${id}.json`)
             .then(() => {
                axios.get(`${import.meta.env.VITE_API}order.json`)
                .then((reponse) => {
                    const resultat = []
                    for(const key in reponse.data){
                        if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
                    }
                    setOrder(resultat)
                })
             })
    }
    // rdv 13h40 

    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Liste des commandes</h2>
               
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>order</th>
                        <th>titre</th>
                        <th>prix</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.titre}</td>
                            <td>{item.titre}</td>
                            <td>
                            <Link to={`/commande/${item.id}`} className="btn btn-dark">
                            Voir plus
                           </Link> 
                                
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </>
     );
}
 
export default Dashboard;