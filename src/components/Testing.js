import React from 'react'

    showGame = () => {
        this.setState({
            gameChoice: true
        })
    }
    startGame = () => {
        if (this.state.gameEdition === "Classic") {
        // this.classicStartGame()}
        this.setState({
            gameStart: false,
            gameChoice: false,
            initialGameState: false
        })
    }
    resetSelection = () => {
        this.setState({
            initialGameState: true,
            gameScore: 0,
            gameReset: false,
            startClassic: false,
            startDoubleSpeed: false,
            startHalfSpeed: false,
            startReverse: false,
            questionNum: 0
        })
    }
    classicEdition = () => {
        this.setState({
            gameEdition: 'Classic',
            gameStart: true
        })
    }
    classicStartGame = () => {
        this.setState({
            startClassic: true,
            questionNum: this.state.questionNum + 1
        })
        this.loadNewQuestion()
    }
    doubleSpeedEdition = () => {
    }
    halfSpeedEdition = () => {
    }
    reverseEdition = () => {
    }
    checkAnswer = () => {
        this.setState({
            questionNum: this.state.questionNum +1
        })
        this.otherCheck(e)
    }
    otherCheck = () => {
    }
    gameOver = () => {
    }