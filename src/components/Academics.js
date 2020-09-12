import React from 'react';
import { } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/EEUMLOGO.png'

import '../css/Academics.css';


function Academics(props) {

    return (
        <div className='AcademicsBox'>
            <img src={logo} alt='me' className='AcademicsPortrait' />
            <div className='Text'>
                <p>{'\t'}As i said in my 'About' page i'm a student at Univerity of Minho, I study 'Informatics Engeneering' which should be the same as 'Computer Science' you are familiar with. </p>
                <p>I consider myself a very analitical person, as such, my favourite classes are those that involve hands on problem solving rather than those focused on theory learning. Unsurprisingly my best grades always came from project oriented classes thats gave me space to put problem solving skills in play.</p>
                <p>I finished my 3rd year of university in 2020 and I am now heading into my masters degree in october of the same year!</p>
            </div>
        </div>
    );
}

export default Academics;