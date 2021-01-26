import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // This lifecycle method runs when an error occurs - check documentation
        this.setState(() => ({ hasError: true }))
    }

    render() {
        if (this.state.hasError) {
            // Report the error
            return <h1>Oooops! An unknown error has occured!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary