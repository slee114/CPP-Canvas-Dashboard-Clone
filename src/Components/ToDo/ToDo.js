import React from 'react';
import Announcement from './Announcement.js';
import './ToDo.css';
import { useState} from 'react';
import {AnnouncementList} from './AnnouncementList.js';
import Feedback from './Feedback.js';
import { FeedbackList } from './FeedbackList.js';

const ToDo = () => {
    const [todoList, setToDoList] = useState(AnnouncementList);


    const deleteAnnouncement = (id) => {
        const newTodoList = todoList.filter((element) => element.id !== id);
        setToDoList(newTodoList);
    };
    
    const announcementList = todoList.map((user, i) => {
         return <Announcement announcement={todoList[i].message} class={todoList[i].name} time={todoList[i].date} action={() => deleteAnnouncement(user.id)}> </Announcement>
    })

    const feedbackList = FeedbackList.map((feedback, i) => {
        return <Feedback assignment={FeedbackList[i].assignment} classCode={FeedbackList[i].class} grade={FeedbackList[i].grade} comments={FeedbackList[i].comment} />
    })

    return(
        <div className='ToDo'>
            <div className='ToDoTitle'>
            <p><b>To Do</b></p>
            </div>
            <div className='AnnouncementContainer'>
                {announcementList}
            </div>
            <div className='RecentFeedbackTitle'>
            <p><b>Recent Feedback</b></p>
            </div>
            <div className='FeedbackContainer'>
                {feedbackList}
            </div>
        </div>
    );
}

export default ToDo;