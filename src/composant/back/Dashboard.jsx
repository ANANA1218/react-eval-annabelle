import { useArticle } from "../../hook/useArticle";
import { Link } from "react-router-dom"
import axios from "axios";

const Dashboard = () => {
    const [articles, setArticles] = useArticle()

    const handleSupprimer = (id) => {
        axios.delete(`${import.meta.env.VITE_API}articles/${id}.json`)
             .then(() => {
                axios.get(`${import.meta.env.VITE_API}articles.json`)
                .then((reponse) => {
                    const resultat = []
                    for(const key in reponse.data){
                        if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
                    }
                    setArticles(resultat)
                })
             })
    }
    // rdv 13h40 

    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Liste des articles publiés</h2>
                <Link className="btn btn-info" to="/admin/article/add">ajouter un nouvel article</Link>
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>titre</th>
                        <th>contenu</th>
                        <th>img</th>
                        <th>nb commentaires</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    { articles.map((article) => {
                        return <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.contenu}</td>
                            <td><img src={article.img} alt="" width="60" /></td>
                            <td>{ article.commentaires ? Object.keys(article.commentaires).length : 0 }</td>
                            <td>
                                <Link className="btn btn-warning me-2" to={`/admin/article/update/${article.id}`}>modifier</Link>
                                <button onClick={() => { handleSupprimer(article.id) }} className="btn btn-danger">supprimer</button>
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </>
     );
}
 
export default Dashboard;