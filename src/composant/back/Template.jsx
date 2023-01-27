import { NavLink, Outlet } from "react-router-dom";

const Template = () => {
    return ( 
        <div className="row">
            <div className="col-2">
                <h2 className="fs-4">Espace de Gestion</h2>
                <ul className="list-group">
                    <NavLink to="/admin" className={({isActive}) => {
                        return isActive ? "list-group-item active" : "list-group-item"
                    }} end> gestion des articles </NavLink>
                    <NavLink to="/admin/users" className={({isActive}) => {
                        return isActive ? "list-group-item active" : "list-group-item"
                    }}> gestion des users </NavLink>
                </ul>
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Template;

// rdv 10h35 @ toute suite !!!