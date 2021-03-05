import React from 'react';
import './Card.css';

const Card = ({ name, email, id, bg }) => {
    return (
        <div className='card bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5' /*style={{background: `linear-gradient(to left, ${bg[0]}, ${bg[1]})`}}*/>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
            {/* <div className="img-container">
                <img src={src} alt='robots'/>
            </div> */}
            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;