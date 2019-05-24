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
        xCoordinateMouse: 0,
        yCoordinateMouse: 0,
    }

    _onMouseMove = (e) => {
        this.setState({
            xCoordinateMouse: e.screenX, yCoordinateMouse: e.screenY
        });
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
            <div onMouseMove={() => this._onMouseMove(this)}>
            {
                onHomeScreen ?
                    <WelcomeScreen playGame={this.playGame}/> : <Game />
            }
            </div>
    	)
    }
}

export default Home
