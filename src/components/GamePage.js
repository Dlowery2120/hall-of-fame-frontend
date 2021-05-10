import React, { Component } from 'react';
import GameMode from "./GameMode.js"
import Question from "./Question.js"
import Answer from "./Answer.js"

class GamePage extends Component {
    render() {
        return(
        <div>
            <h4>GamePage</h4>
            <div>
                {/* {console.log(this.props.gamemodesArr)} */}
                {this.props.gamemodesArr.map(singleGamemode => <GameMode key={singleGamemode.id} gamemode={singleGamemode}/>)}
            </div>
        </div>)
    }
}

export default GamePage;