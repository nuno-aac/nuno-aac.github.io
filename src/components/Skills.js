import React from 'react';
import { } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import C from '../assets/icons/c.png'
import Cplusplus from '../assets/icons/c++.svg'
import JS from '../assets/icons/js.svg'
import Java from '../assets/icons/java.svg'
import Haskell from '../assets/icons/haskell.svg'

import '../css/Skills.css';


function Skills(props) {

    return (
        <div className='SkillsBox'>
            <div className='Skill' >
                <img src={C} alt='C' className='Icon'/>
            </div>
            <div className='Skill' >
                <img src={Cplusplus} alt='C' className='Icon' />
            </div>
            <div className='Skill' >
                <img src={JS} alt='C' className='Icon' />
            </div>
            <div className='Skill' >
                <img src={Java} alt='C' className='Icon' />
            </div>
            <div className='Skill' >
                <img src={Haskell} alt='C' className='Icon' />
            </div>
        </div>
    );
}

export default Skills;