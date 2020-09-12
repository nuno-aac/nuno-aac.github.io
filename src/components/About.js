import React from 'react';
import { } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/me.jpg'

import '../css/About.css';


function About(props) {

    return (
        <div className='TextBox'>
            <img src={logo} alt='me' className='Portrait' />
            <div className='Text'>
                <p>{'\t'}My name is Nuno Cunha. I'm currently a student at University of Minho in Portugal.</p>
                <p>I'm very passionate about developing projects in my area, and also take interest in competitive sports!</p>
                <p>This Website was made as a summer project using reactJS to improve my understanding of web development and javascript.</p>
            </div>
        </div>
    );
}

export default About;