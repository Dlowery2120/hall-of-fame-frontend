import React, { Component } from 'react';
import GameMode from "./GameMode.js"
import Question from "./Question.js"
import Answer from "./Answer.js"

class GamePage extends Component {
    // state={
    //     questions: []
    // }

    // componentDidMount(){
    //     fetch("http://localhost:3000/api/v1/questions")
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         questions: data
    //     }))
    // }
    
    render() {
        return(
        <div>
            <h4>Pick a gamemode!</h4>
            <div>
                {/* {console.log(this.props.gamemode)} */}
                {this.props.gamemodesArr.map(singleGamemode => <GameMode key={singleGamemode.id} gamemode={singleGamemode} questions={this.props.questionsArr} questionRenderChoices={this.props.questionRenderChoices} questionGetRandom={this.props.questionGetRandom} answers={this.props.answers}/>)}
                {/* <GameMode key={this.props.gamemode.id} gamemode={this.props.gamemode} questions={this.props.questionsArr} questionRenderChoices={this.props.questionRenderChoices} answers={this.props.answers}/> */}
            </div>
        </div>)
    }
}

export default GamePage;