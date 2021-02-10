import React from 'react';
import './Card.css';

const Card = ({ name, planet, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{planet}</p>
            </div>
        </div>

    );
}

export default Card;