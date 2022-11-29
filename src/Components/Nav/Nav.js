import React from 'react';
import NavButton from './NavButton.js';
import './Nav.css';
import { faUsers, faBook, faGaugeSimpleHigh, faCalendarDays, faEnvelopeOpenText, faClock, faCircleQuestion, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

import CPPImage from './cppimage.jpg';

const Nav = () => {
    return(
            <div className='NavDiv'>
                <div className='upperButtons'>
                <a href='https://canvas.cpp.edu/' className='NB'><img src={CPPImage} alt='CPPimage' className='CPPimage' /></a>
                <NavButton className='NB' icon={faCircleUser} buttonName='Account'/>
                <NavButton className='NB' icon={faGaugeSimpleHigh} buttonName='Dashboard'/>
                <NavButton className='NB' icon={faBook} buttonName='Courses'/>
                <NavButton className='NB' icon={faUsers} buttonName='Groups'/>
                <NavButton className='NB' icon={faCalendarDays} buttonName='Calendar'/>
                <NavButton className='NB' icon={faEnvelopeOpenText} buttonName='Inbox'/>
                <NavButton className='NB' icon={faClock} buttonName='History'/>
                <NavButton className='NB' icon={faCircleQuestion} buttonName='Help'/>
                </div>
                <div className='switch'><NavButton className='NB' icon={faArrowLeftLong} /></div>
            </div>
    );
}

export default Nav;