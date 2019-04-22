import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Botao extends React.Component {
    render() {
        return (
            <button className="botao" onClick={() => window.location.reload()}>
                Reset
            </button>
        )
    }
}

function Square(props) {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
    );
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            status: "O",
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const results = calculateWinner(this.state.squares);
        let winner;
        let status;
        let status2;

        if (results) {
            winner = results[0];
            status = "Vencedor: ";
            status2 = winner;
            alert("Você ganhou! Aperte o botão 'Reset' para um novo jogo");
        } else {
            status = "É a vez de: ";
            status2 = (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div>
                <div id="jogo">
                    <div className="linha">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="linha">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="linha">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                    <Botao />
                </div>
                <div className="direita">{status}<p /><text id="mostra" className="vez">{status2}</text></div>
            </div>

        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div>
                    <Board />
                </div>
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    var velha = 0;
    const linhas = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < linhas.length; i++) {
        velha++;
        const [a, b, c] = linhas[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
