import React from 'react';
import './Card.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faFile, faMessage, faFolder} from '@fortawesome/free-regular-svg-icons';


const Card = (props) => {
    return(
        <div className='card'>
            <div className='image_background'>
                <img className='c_image' src={props.c_image} alt='' onError={(event) => event.target.style.display = 'none'}>
                </img>
            </div>
            <div className='text-container'>
                <b className='Class'> {props.class} </b>
                <div><a href={props.classLink} className='Card-a'> {props.classCode} </a></div>
                <div className='Semester'> {props.semester} </div>
            </div>
            <div className='Bottom-container'>
                <FontAwesomeIcon icon={faBullhorn} className='faIcons' />
                <FontAwesomeIcon icon={faFile} className='faIcons' />
                <FontAwesomeIcon icon={faMessage} className='faIcons' />
                <FontAwesomeIcon icon={faFolder} className='faIcons' />
            </div>
        </div>
    );
}

export default Card;