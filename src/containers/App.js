import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Card/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // assignPlanet(url){

    // }
    componentDidMount() {
        fetch('https://swapi.py4e.com/api/people/')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users.results });
                for(let i = 0; i < this.state.robots.length; i++){
                    const url = this.state.robots[i].homeworld;
                    fetch(url).then(response => response.json()).then(planet => {
                        //https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate
                        let robots = [...this.state.robots];
                        let robot = {...robots[i]};
                        robot.planetName = planet.name;
                        robots[i] = robot;
                        this.setState({robots: robots});
                    })
                }
            });
            
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
            <h1 className='tc'>No robots to show :(</h1> :
            (
                <div className='tc'>
                    <h1 className='tc f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>

            );
    }

}
    


export default App;