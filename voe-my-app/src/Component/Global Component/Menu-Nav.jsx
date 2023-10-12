import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SearchIcon from "../Images/search-icon.png";
import '../Style-Component/Style-Header.css'


const MenuNav =() => {
    return (
        <div className="MenuNav">
            <ul>
            <li><Link to="/">Accueil</Link></li>

                <li><a href="#">Vie du Club</a>
                    <ul className="submenu">
                        <li><a href="#">Objectifs</a></li>
                        <li><a href="#">Caracteristiques et bienfaits de l'escrime</a></li>
                        <li><a href="#">Lieux d'entraînement</a></li>
                        <li><a href="#">Horaires</a></li>
                        <li><a href="#">Manifestations</a></li>                       
                    </ul>
                </li>

                <li>
                <Link to="/Competitions">Compétitions</Link>
                    <ul className="submenu">
                        <li><Link to="/Competitions/Calendrier">Calendrier</Link></li>
                        <li><Link to="/Competitions/Resultats">Resultats</Link></li>
                        <li><Link to="/Competitions/Classement">Classement</Link></li>
                    </ul>  
                </li>

                <li><a href="#">Boutique du Club</a>
                    <ul className="submenu">
                        <li><a href="#">La Boutique officielle</a></li>
                        <li><a href="#">Bourses d'échanges</a></li>
                    </ul>
                </li>

                <li><a href="#">Inscription</a>
                    <ul className="submenu">
                        <li><a href="#">Documents à compléter</a></li>
                        <li><a href="#">Documents à consulter</a></li>
                        <li><a href="#">Reglement CB</a></li>
                    </ul>
                </li>

                <li><a href="#">Nos Partenaires</a></li>

                <li className="SearchIcon"><img src={SearchIcon} /></li>

            </ul>

        </div>
    );
};

export default MenuNav;