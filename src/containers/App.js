import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

// import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchText: ''
        }

        // this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json()
            })
            .then(users => {
                this.setState(() => ({
                    robots: users
                }))
            })
    }

    handleSearchTextChange = (event) => {
        this.setState(() => ({ searchText: event.target.value}))
        // const filteredRobots = this.state.robots.filter((robot) => {
        //     return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
        // })
            
        // console.log(filteredRobots)
    }

    render () {
        const { robots, searchText } = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase())
        })
            
        if (!robots.length) {
            return <h3>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = { this.handleSearchTextChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App