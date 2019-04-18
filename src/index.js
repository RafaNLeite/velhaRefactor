import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Casa extends React.Component {
    render(){
    return (
        <div className="casa">
            {this.props.value}
        </div>
    );
}
}

class Board extends React.Component {
    renderCasa(i) {
        return (
            <Casa
                value={this.props.i}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    render() {
        return (
            <div>
                <div id="jogo">
                    <div className="linha">
                        {this.renderCasa(11)}
                        {this.renderCasa(12)}
                        {this.renderCasa(13)}
                    </div>
                    <div className="linha">
                        {this.renderCasa(21)}
                        {this.renderCasa(22)}
                        {this.renderCasa(23)}
                    </div>
                    <div className="linha">
                        {this.renderCasa(31)}
                        {this.renderCasa(32)}
                        {this.renderCasa(33)}
                    </div>
                    <input type="button" className="botao" name="limpar" value="Reset" onclick="limpa();" />
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
          <div className="direita"><p>É a vez de:</p> <text id="mostra" class="vez">X</text></div>
          </div>
        </div>
      );
    }
  }

// ===================
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);