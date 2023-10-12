import React from "react";
import { Link } from 'react-router-dom';
import banniereaccueil from "../Images/BanniereAccueil.jpg";
import LogoVOE from "../Images/Logo-VOE.png";
import MenuNav from "./Menu-Nav";
import '../Style-Component/Style-Header.css'


const Header =() => {
    return (
        <div className="Header">
            <Link to="/"> 
                <img src={LogoVOE} alt="Logo du Val d'Orge Escrime" className="LogoVOE" />
            </Link>
            <MenuNav/>
            <div className="banniere">
                <img src={banniereaccueil} alt="banniere match d'escrime"className="BanniereAccueil"/>
            </div>
        </div>
    );
};

export default Header;