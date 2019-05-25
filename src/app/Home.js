import React, { Component } from 'react'
import Game from './Game'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'

class Home extends Component {
    state = {
    	history: [{
    		squares: Array(9).fill(null)
    	}],
    	stepNumber: 0,
        xIsNext: true,
        onHomeScreen: true,
    }

    playGame = () => {
    	this.setState({
    		onHomeScreen: false
    	})
    }

    returnToHomeScreen = () => {
        this.setState({ 
            onHomeScreen: true
        })
    }

    render() {
        const onHomeScreen = this.state.onHomeScreen
    	return (
            <div>
            {
                onHomeScreen ?
                    <WelcomeScreen playGame={this.playGame}/> : <Game returnToHomeScreen={this.returnToHomeScreen}/>
            }
            </div>
    	)
    }
}

export default Home
