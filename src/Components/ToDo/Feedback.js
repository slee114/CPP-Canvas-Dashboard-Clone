import React from "react";
import './ToDo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Feedback = (props) => {
    return(
        <div className="Feedback">
            <FontAwesomeIcon icon={faCheck} className='FeedbackCheck'/>
            <div className="FeedbackText">
                <a href='' className="FeedbackAssignment a">{props.assignment}</a> <br/>
                <a href='' className="FeedbackClass a">{props.classCode}</a> <br/>
                <b href='' className="FeedbackGrade a">{props.grade}</b> <br/>
                <a href='' className="FeedbackComments a">"{props.comments}"</a>
            </div>
        </div>
    );
};

export default Feedback;