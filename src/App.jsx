import { Link, Outlet } from "react-router-dom";
import Menu from "./composant/Menu";

const App = () => {
  //console.log(process.env.REACT_APP_API)
 // console.log(import.meta.env.VITE_API)
  return ( <div className="page">
    <Menu />
    <div className="container">
      <Outlet />
    </div>
    
  </div> );
}
 
export default App;