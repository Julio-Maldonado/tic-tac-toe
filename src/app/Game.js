import React, { Component } from 'react'
import {calculateWinner} from './helperFunctions'
import Board from './Board'
import './styles.css'
import Modal from 'react-responsive-modal'

class Game extends Component {
    state = {
    	history: [{
    		squares: Array(9).fill(null)
    	}],
    	stepNumber: 0,
		xIsNext: true,
		openModal: false,
    }

    jumpTo = (step) => {
    	this.setState({
    		stepNumber: step,
    		xIsNext: (step % 2) === 0
    	})
    }

    handleClick = (i) => {
    	const history = this.state.history.slice(0, this.state.stepNumber + 1)
    	const current = history[history.length - 1]
    	const squares = current.squares.slice()

    	if (calculateWinner(squares) || squares[i])
    		return

    	squares[i] = this.state.xIsNext ? 'X' : 'O'
    	this.setState({
    		history: history.concat([{
    			squares: squares
    		}]),
    		stepNumber: history.length,
    		xIsNext: !this.state.xIsNext
    	})
	}
	
	clearGame = () => {
		this.setState({
			history: [{
    			squares: Array(9).fill(null)
			}],
			stepNumber: 0
		})
	}

	onOpenModal = () => {
		this.setState({ openModal: true });
	};

	onCloseModal = () => {
		this.setState({ openModal: false});
		this.clearGame()
	};

    render() {
		const openModal = this.state.openModal

    	const history = this.state.history
    	const current = history[this.state.stepNumber]
    	const winner = calculateWinner(current.squares)

    	const moves = history.map((step, move) => {
    		const desc = move ? 'Go to move #' + move : 'Go to game start'

    		return (
    			<li key={move}>
    				<button onClick={() => this.jumpTo(move)}>{desc}</button>
    			</li>
    		)
    	})

    	let status
    	if (winner && !openModal) {
			status = 'Winner: ' + winner
			this.onOpenModal()
		}
    	else
    		status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')

    	return (
    		<div className="game">
				<Modal open={openModal} onClose={this.onCloseModal} center>
					<h2>Congrats Player {winner}!</h2>
					<button onClick={() => this.onCloseModal()}>Play Again</button>
					<button onClick={() => this.props.returnToHomeScreen()}>Go Back</button>
				</Modal>
    			<div className="game-board">
    				<Board
    					squares={current.squares}
    					onClick={(i) => this.handleClick(i)}
    				/>
    			</div>
    			<div className="game-info">
    				<div>{status}</div>
    				<ol>{moves}</ol>
    			</div>
    		</div>
    	)
    }
}

export default Game
