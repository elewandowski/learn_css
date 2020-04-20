import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <img class="header-icon" src="/assets/bull.svg"></img>
                        <a href="#a">
                            link a
                        </a>
                    </li>
                    <li >
                        <img class="header-icon" src="/assets/glasses.svg"></img>
                        <a href="#b">
                             link b
                        </a>
                    </li>
                    <li >
                        <a href="c">
                             link c
                        </a>
                    </li>
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
            <div className="content">
                <div className="section section-one">
                    <div className="section-one-content">
                        <h1 className="content-header1">Here's a cool website</h1>
                        <p>These are some great artworks by Robert Pan Mahdi</p>
                        <img className="content-img" src="/assets/robert_pan_mahdi_1.jpg"></img>
                        <img className="content-img" src="/assets/rpm_2.jpg"></img>
                    </div>
                </div>
                <div className="section section-two">
                    {/* <img src="/assets/rpm_2.jpg"></img>                     */}
                </div>
            </div>

        </div> 
        );
    }
}
  
  // ========================================
  
    ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
  