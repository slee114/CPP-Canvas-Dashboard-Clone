import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavButton = (props) => {
    return(
            <button className='NavButton'>
                <FontAwesomeIcon className='NavIcons' icon={props.icon} /> <br/>
                <span>{props.buttonName}</span>
            </button>
    );
}

export default NavButton;