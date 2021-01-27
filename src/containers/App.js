import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

// import { robots } from './robots';

function App()  {
    // Declare the 'state' variables using State Hooks
    const [searchText, setSearchText] = useState('');
    const [robots, setRobots] = useState([]);

    // Declare the effects using Effect Hook
    useEffect(() => {
        console.log('Calling useEffect()')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json()
        })
        .then(users => {
            setRobots(users)
        })
        // Add the [] as second parameter to ensure this effect only runs once
    }, []);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
    }

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchText.toLowerCase())
    }) 
    
    return (
        <div>
            { 
            !robots.length
                ? <h3>Loading...</h3> 
                : 
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = { handleSearchTextChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { 
                                filteredRobots
                            } />
                        </ErrorBoundary>
                    </Scroll>
                </div>

            }
        </div>
    )

}

export default App