import React from 'react';
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../assets/Logo.png'

import '../App.css';

function Item(props) {
    // Correct! There is no need to specify the key here:
    return (

    <div className='Item'>
        <FontAwesomeIcon className='ItemIcon' icon={props.value.icon}/>
        <div>
            {props.value.text}
        </div>
    </div>

    );
}

function ListItem(props) {
    const setView = props.setView;
    // Correct! There is no need to specify the key here:
    return(
         
        <li className='ListItem' onClick={() => {setView(props.value.text); console.log(props.value.text)}}>
            <Item value={props.value} />
        </li>
    );
}

function SideBar(props) {
    const numbers = props.numbers;
    const visible = props.visibility;
    const setView = props.viewSetting;
    let visibilityClass ='hide';

    if(visible){
        visibilityClass = 'show';
    }

    console.log('showing: ' + props.visibility + '/' + visibilityClass);

    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.text} value={number} setView={setView} />
    );
    
    return (
        <div id='SideBar' className={visibilityClass} onMouseLeave={props.onMouseLeave}>
            <img src={Logo} className="SideBar-logo" alt="logo" />
            <ul className='List'>
                {listItems}
            </ul>
        </div>
    );
}

export default SideBar;

