import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    function pickBg(robot){
        const house = robot?.house.toLowerCase() || null;
        let color1 = '';
        let color2 = '';
        
        switch(house) {
            case 'slytherin':
                color1 = '#015C4B';
                color2 = '#6EDD9E';
                break;
            case 'gryffindor':
                color1 = '#D6503F';
                color2 = '#f54e38';
                break;
            case 'hufflepuff':
                color1 = '#FCB92B';
                color2 = '#fac95f';
                break;
            case 'ravenclaw':
                color1 = '#203169';
                color2 = '#3c4c82';
                break;
            default:
                color1 = '#A8ADB1';
                color2 = '#ffffff'

        }

        let colors = [color1, color2];
        return colors;
    }
    return (
        <div>
            { robots.map((user, i) => {
                return (
                    <Card
                        key={user.name}
                        id={user.id}
                        // src = { robots[i].image }
                        name={user.name}
                        email={user.email}
                        // planet={ robots[i]?.house || 'no house' }
                        // bg={ pickBg(robots[i]) }

                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;