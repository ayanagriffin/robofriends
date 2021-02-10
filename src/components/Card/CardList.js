import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            { robots.map((user, i) => {
                return (
                    <Card
                        key={robots[i].name}
                        id={robots[i].name}
                        name={robots[i].name}
                        planet={ robots[i].planetName }
                        // planet={ 'test'}

                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;