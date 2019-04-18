import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Casa extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }    

    render(){
    return (
        <div className="casa" onClick={() => this.setState({value: 'X'})}>
            {this.state.value}
        </div>
    );
}
}

function limpa() {
    for (var i = 1; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            var nomepos = "pos" + i + j
            document.getElementById(nomepos).value = "";
        }
    }
}

class Board extends React.Component {
    renderCasa(i) {
        return (
            <Casa value={i} />
        );
    }
    render() {
        return (
            <div>
                <div id="jogo">
                    <div className="linha">
                        {this.renderCasa("pos11")}
                        {this.renderCasa("pos12")}
                        {this.renderCasa("pos13")}
                    </div>
                    <div className="linha">
                        {this.renderCasa("pos21")}
                        {this.renderCasa("pos22")}
                        {this.renderCasa("pos23")}
                    </div>
                    <div className="linha">
                        {this.renderCasa("pos31")}
                        {this.renderCasa("pos32")}
                        {this.renderCasa("pos33")}
                    </div>
                    <input type="button" className="botao" name="limpar" value="Reset" onClick={limpa} />
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