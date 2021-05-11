import React, { Component } from 'react';
import GamePage from "../components/GamePage.js"

class TriviaContainer extends Component {
    state={
        gamemodes: [],
        questions: [{value: ""}]
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
    }

    gamemodeOnClickHandler = () => {
        
    }

    render() {
    return(
        <div>
            <h1>TriviaContainer</h1>
            <GamePage gamemodesArr={this.state.gamemodes} questionsArr={this.state.questions}/>
        </div>
        )
    }
}

export default TriviaContainer;