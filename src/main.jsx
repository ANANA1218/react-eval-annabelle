import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './composant/front/Home';
import Contact from './composant/front/Contact';
import Login from './composant/front/Login';
import ViewOrder from './composant/front/ViewOrder';
import Dashboard from './composant/back/Dashboard';
import FormArticle from './composant/back/article/FormArticle';
import CycleVie from './composant/front/CycleVie';
import Single from './composant/front/Single';
import NotFound from './composant/front/NotFound';
import MentionLegale from './composant/front/MentionLegale';
import Template from './composant/back/Template';
import Users from './composant/back/users/Users';
import FormUser from './composant/back/users/FormUser';
import HOM from './composant/front/HOM';

import { AuthContextProvider } from "./context/authContext";
import Panier from './composant/front/Panier';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="commande" element={<Login />} />
          <Route path="cycle-vie" element={<CycleVie />} />
          <Route path="article/:id" element={<Single />} />
          <Route path="commande/:id" element={<ViewOrder />} />
          <Route path="panier" element={<Panier />} />
          <Route path="mention-legale" element={<MentionLegale />} />
          <Route path="admin" element={<Template />}> 
                      {/** template imbriqué */}
            <Route index element={<Dashboard />} />
            <Route path="article"> 
              <Route path="add" element={<FormArticle />} />
              <Route path="update/:id" element={<FormArticle />} />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path="add" element={<FormUser />} />
            </Route>
          </Route>
          {/** route à mettre en dernière position => route 404 */}
          <Route path="*" element={<NotFound />} />
         
        </Route>
        <Route path="homes" element={<HOM />} />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
)
