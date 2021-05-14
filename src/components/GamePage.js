import React, { Component } from 'react';
import GameMode from "./GameMode.js"
import Question from "./Question.js"



class GamePage extends Component {
    
    render() {
        return(
        <div>
            <h4>Pick a gamemode!</h4>
            <div>
                {this.props.gamemodesArr.map(singleGamemode => <GameMode 
                    key={singleGamemode.id} 
                    songs={this.props.songsArr} 
                    gamemode={singleGamemode} 
                    questions={this.props.questionsArr} 
                    questionRenderChoices={this.props.questionRenderChoices} 
                    questionGetRandom={this.props.questionGetRandom} 
                    answers={this.props.answers} 
                    loadNewQuestion={this.props.loadNewQuestion}
                    />
                )}
            </div>
        </div>)
    }
}

export default GamePage;