import React from 'react';
import Card from './Card.js';
import './CardDisplay.css';

const CardDisplay = ({classes}) => {
    const cardComponent = classes.map((user, i) => {
        return <Card c_image={classes[i].image} classLink={classes[i].link} class={classes[i].name} classCode={classes[i].code} semester={classes[i].semester}></Card>
    })
    return (
        <div className='CardDisplay'>
            {cardComponent}
        </div>
    );
}

export default CardDisplay;