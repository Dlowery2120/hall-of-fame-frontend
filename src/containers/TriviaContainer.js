import React, { Component } from 'react';
import GamePage from "../components/GamePage.js"

class TriviaContainer extends Component {
    state={
        gamemodes: [],
        questions: [{value: ""}],
        answers: [{value: ""}],
        answered: "",
        isRight: null
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
    }

    gamemodeOnClickHandler = () => {

    }

    mappedAnswersArr = () => {
        this.state.answers.map(ans => ans.answer)
    }

    answerClicked = (answer) => {
        const { hasAnswered, correct_answer } = this.state.answers
        return event => {
            const isRight = correct_answer === answer 
            hasAnswered(isRight)
            this.setState({
                answered: answer,
                isRight
            })
        }
    }

    questionRenderChoices = () => {
        const mappedAnswersArr = this.state.answers.map(ans => ans.answer)
        // {console.log(mappedAnswersArr)}
        const { correct_answer, incorrect_answers } = this.state.answers
        let allAnswers = incorrect_answers ? incorrect_answers.concat(correct_answer) : []
        const questionRandomizer = (x) => {
            let qArr = [...x]
            let randomizedArr = []
            
            while (qArr.length > 0) {
                let questionIndex = Math.floor(Math.random() * qArr.length)
                randomizedArr.push(qArr[questionIndex])
                qArr.splice(questionIndex, 1) // need to take out piece of array and then we can loop again
            }
            return randomizedArr // our loop is finished so now we can return the random array
            
        }

        let newRandomizedArr = questionRandomizer(allAnswers)
        return newRandomizedArr.map(answer => {
            return <div onClick = {this.answerClicked(answer)}>{answer}</div>
        })
    }

    questionGetRandom = (x) => {
        let qArr = [...x]
        let randomizedArr = []
        
        while (qArr.length > 0) {
            let questionIndex = Math.floor(Math.random() * qArr.length)
            randomizedArr.push(qArr[questionIndex])
            qArr.splice(questionIndex, 1) // need to take out piece of array and then we can loop again
        }
        return randomizedArr // our loop is finished so now we can return the random array
        // {console.log(randomizedArr)}
    }


    render() {
    return(
        <div>
            {/* {console.log(mappedAnswersArr)} */}
            <h1>TriviaContainer</h1>
            <GamePage gamemodesArr={this.state.gamemodes} questionsArr={this.state.questions} questionRenderChoices={this.questionRenderChoices} questionGetRandom={this.questionGetRandom} answers={this.state.answers}/>
            {/* {this.state.gamemodes.map(singleGamemode => <GamePage gamemode={singleGamemode}/>)} */}
        </div>
        )
    }
}

export default TriviaContainer;