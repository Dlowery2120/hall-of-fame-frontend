import React, { Component } from 'react';
import GamePage from "../components/GamePage.js"

class TriviaContainer extends Component {
    state={
        gamemodes: []
    }


    componentDidMount(){
        fetch("http://localhost:3000/api/v1/gamemodes")
        .then(res => res.json())
        .then(data => this.setState({
            gamemodes: data
        }))
    }

    render() {
    return(
        <div>
            <h1>TriviaContainer</h1>
            <GamePage gamemodesArr={this.state.gamemodes}/>
        </div>
        )
    }
}

export default TriviaContainer;