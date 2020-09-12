import React from 'react';
import { faFacebookSquare, faGithubSquare, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import '../css/Contacts.css';


function Contacts(props) {

    return (
        <div className='ContactsBox'>
            <div className='Socials'>
                <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/nuno.cunha.144'>
                    <div className='Contact' >
                        <FontAwesomeIcon className='ContactIcon' icon={faFacebookSquare} />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/nuno-aac'>
                    <div className='Contact' >
                        <FontAwesomeIcon className='ContactIcon' icon={faGithubSquare} />
                    </div>
                </a>
            </div>
            <div className='Line' />
            <div className='EmailBox' >
                <FontAwesomeIcon icon={faEnvelopeSquare} className='EmailIcon' />
                <div className='EmailText'>
                    naac.1999@gmail.com
                </div>
            </div>
        </div>
    );
}

export default Contacts;