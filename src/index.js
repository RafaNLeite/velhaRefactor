import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Casa(props) {
    return (
        <div className="casa" onClick={() => alert('click')}>
            {props.value}
        </div>
    );
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
                <div className="direita"><p>É a vez de:</p> <text id="mostra" class="vez">X</text></div>
            </div>
        );
    }
}

// ===================
ReactDOM.render(
    <Board />,
    document.getElementById('root')
);