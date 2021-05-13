import React, { Component } from 'react';
import GamePage from "../components/GamePage.js"

class TriviaContainer extends Component {
    state={
        gamemodes: [],
        questions: [{value: ""}],
        answers: [{value: ""}],
        songs: [{value: ""}],
        answered: "",
        isRight: null,
        gameStart: false,
        displayMode: false
    }


    componentDidMount(){
        fetch("http://localhost:3000/api/v1/gamemodes")
        .then(res => res.json())
        .then(data => this.setState({
            gamemodes: data
        }))
        

        fetch("http://localhost:3000/api/v1/questions")
        .then(res => res.json())
        .then(data => this.setState({
            questions: data
        }))

        fetch("http://localhost:3000/api/v1/answers")
        .then(res => res.json())
        .then(data => this.setState({
            answers: data
        }))

        fetch("http://localhost:3000/api/v1/songs")
        .then(res => res.json())
        .then(data => this.setState({
            songs: data
        }))

    }

    gamemodeOnClickHandler = () => {

    }

    loadNewQuestion = () => {
        console.log("New Question")
    }

    // gameStart = () => {
    //     if (this.state.gameEdition === "Classic") {
    //     // this.classicStartGame()}
    //     this.setState({
    //         gameStart: !this.state.gameStart,
    //         // gameChoice: false,
    //         // initialGameState: false
    //     })
    // }


    answerClicked = (answer) => {
        const { hasAnswered, correct_answer } = this.state.songs
        return event => {
            const isRight = correct_answer === answer 
            hasAnswered(isRight)
            this.setState({
                answered: answer,
                isRight
            })
        }
    }



    render() {
    return(
        <div>
            {/* {console.log(mappedAnswersArr)} */}
            <h1>TriviaContainer</h1>
            <GamePage 
            gamemodesArr={this.state.gamemodes} 
            songsArr={this.state.songs} 
            questionsArr={this.state.questions} q
            uestionRenderChoices={this.questionRenderChoices} 
            questionGetRandom={this.questionGetRandom} 
            answers={this.state.answers}
            loadNewQuestion={this.loadNewQuestion}
            
            // gameStart={this.gameStart}
            />
            {/* {this.state.gamemodes.map(singleGamemode => <GamePage gamemode={singleGamemode}/>)} */}
        </div>
        )
    }
}

export default TriviaContainer;