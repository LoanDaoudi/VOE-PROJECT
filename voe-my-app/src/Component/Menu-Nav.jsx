import React from "react";
import './Style-Component/Style-Header.css'


const MenuNav =() => {
    return (
        <div className="MenuNav">
            <ul>
                <li><a href='#'>Accueil</a></li>

                <li><a href="#">Vie du Club</a>
                    <ul className="submenu">
                        <li><a href="#">Objectifs</a></li>
                        <li><a href="#">Caracteristiques et bienfaits de l'escrime</a></li>
                        <li><a href="#">Lieux d'entraînement</a></li>
                        <li><a href="#">Horaires</a></li>
                        <li><a href="#">Manifestations</a></li>                       
                    </ul>
                </li>

                <li><a href="#">Compétitions</a>
                    <ul className="submenu">
                        <li><a href="#">Calendrier</a></li>
                        <li><a href="#">Résultats</a></li>
                        <li><a href="#">Classements</a></li>
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

            </ul>

        </div>
    );
};

export default MenuNav;