import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faTimes} from '@fortawesome/free-solid-svg-icons';

const Announcement = (props) => {
    return(
        <div className='AnnouncementBubble'>
            <FontAwesomeIcon className='bullhorn' icon={faBullhorn} />
            <div className='text'>
                <a className='title' href=''>{props.announcement}</a> <br/>
                <b className='class'>{props.class}</b> <br/>
                {props.time}
            </div>
            <FontAwesomeIcon className='delete' icon={faTimes} onClick={props.action} />
        </div>
    );
}

export default Announcement;