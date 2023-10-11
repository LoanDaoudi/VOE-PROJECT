import React from "react";
import banniereaccueil from "./Images/BanniereAccueil.jpg";
import LogoVOE from "./Images/Logo-VOE.png";
import MenuNav from "./Menu-Nav";
import './Style-Component/Style-Header.css'


const Header =() => {
    return (
        <div className="Header">
            <img src={LogoVOE} alt="Logo du Val d'Orge Escrime" className="LogoVOE"/>
            <MenuNav/>
            <img src={banniereaccueil} alt="banniere match d'escrime"className="BanniereAccueil"/>
        </div>
    );
};

export default Header;