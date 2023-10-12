import React from "react";
import Header from "../Global Component/Header";
import Button from "../Global Component/Button";
import '../Style-Component/Style-Background.css'
import '../Style-Component/Style-Compet.css'


const Compet =() => {
    return (
        <div className="Main">
            <Header/>
            <div className="Compet">
                <Button text="Calendrier" linkTo="/Competitions/Calendrier" />
                <Button text="Résultats" linkTo="/Competitions/Resultats"/>
                <Button text="Classements" linkTo="/Competitions/Classement" />
            </div>

        </div>

    );
};

export default Compet;