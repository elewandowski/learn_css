import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <a>
                            <svg>
                                
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com">
                            Home
                        </a>
                    </li>
                    <li>Beta</li>
                    <li>Gamma</li>
                </ul>
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
}

class ResetButton extends React.Component {
    render() {
        return (
            <button className="reset-button">Reset Me</button>
        );
    }
}
  
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xIsNext: true,
            values: Array(9).fill(null),
            totalFilled: 0
        }
    }

    handleClick(i) {
        const copyOfValues = this.state.values.slice()
        if (!copyOfValues[i]) {
            copyOfValues[i] = this.state.xIsNext ? 'x' : 'o'
            this.setState({xIsNext: !this.state.xIsNext})
        }
        this.setState({values: copyOfValues})
    }

    renderSquare(i) {
        return <Square value={this.state.values[i]} onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div className="game-board">
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <Board/>
            <ResetButton/>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>
                   {}
                </ol>
            </div>
        </div>
        )
    }
}
  
class App extends React.Component {
    render() {
        const items = new Array(25).fill(0)
        return (
        <div>
            <Header></Header>
            <content>
                <Game/>
            </content>
            
            {items.map((val, index) => {
                return <p key={index}>{val}</p>
            })}
        </div> 
        );
    }
}
  
  // ========================================
  
    ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
  