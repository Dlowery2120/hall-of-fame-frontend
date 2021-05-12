import React from 'react';

const Question = (props) => {
    const questionsRandomized = () => {
        let questionArrFx = props.questions.map(data => data.question)
        // {console.log(questionArrFx)}
        let qArr = [...questionArrFx]
        let randomizedArr = []
        // console.log(props.question.answer)
        while (qArr.length > 0) {
            let questionIndex = Math.floor(Math.random() * qArr.length)
            randomizedArr.push(qArr[questionIndex])
            qArr.splice(questionIndex, 1) // need to take out piece of array and then we can loop again
        }
        return randomizedArr[0] // our loop is finished so now we can return the random array
        
    }

// >>>>>>>>>>>>>>>>>>>>>SONG TITLES ONLY<<<<<<<<<<<<<<<<<<<<<
    let wrongChoices = () => {
        let songTitles = props.songs.map(data => data.title)
        let songTitlesArr = [...songTitles]
        let randomizedTitlesArr = []
        while (songTitlesArr.length > 0) {
            let answerIndex = Math.floor(Math.random() * songTitlesArr.length)
            randomizedTitlesArr.push(songTitlesArr[answerIndex])
            songTitlesArr.splice(answerIndex, 1)
        }
        return randomizedTitlesArr[0]
    }

    let choiceA = `${wrongChoices()}`
    let choiceB = `${wrongChoices()}`
    let choiceC = `${wrongChoices()}`
    let choiceD = `${wrongChoices()}`

    let aCheck = () => {
        if (choiceA === choiceB || choiceA === choiceC || choiceA === choiceD)
        choiceA= `${wrongChoices()}`
        return choiceA
    }
    let bCheck = () => {
        if (choiceB === choiceA || choiceB === choiceC || choiceB === choiceD)
        choiceB= `${wrongChoices()}`
        return choiceB
    }
    let cCheck = () => {
        if (choiceC === choiceA || choiceC === choiceB || choiceC === choiceD)
        choiceC= `${wrongChoices()}`
        return choiceC
    }
    let dCheck = () => {
        if (choiceD === choiceA || choiceD === choiceB || choiceD === choiceC)
        choiceD= `${wrongChoices()}`
        return choiceD
    }
// >>>>>>>>>>>>>>>>>>>>>SONG TITLES ONLY<<<<<<<<<<<<<<<<<<<<<

    let rightAnswer = "correct answer goes here"

    let randomSongObject = () => {
        let songObjects = [...props.songs]
        let randomizedSongArr = []
        while (songObjects.length > 0) {
            let answerIndex = Math.floor(Math.random() * songObjects.length)
            randomizedSongArr.push(songObjects[answerIndex])
            songObjects.splice(answerIndex, 1)
        }
        console.log(randomizedSongArr[0].title)
    
    }

    return(

        <div>
            {/* <h3>{questionsRandomized()}</h3> */} 
            {/* add the above line for dynamic quesitons; need to condition questions to answer choices in order to use it */}
            <h3>What is the title of this song?</h3>
            <p>{randomSongObject()}</p>
            <button id="choiceBtn" className="ansBtn">a) {aCheck()}</button><br/><br/>
            <button id="choiceBtn" className="ansBtn">b) {bCheck()}</button><br/><br/>
            <button id="choiceBtn" className="ansBtn">c) {cCheck()}</button><br/><br/>
            <button id="choiceBtn" className="ansBtn">d) {dCheck()}</button>
        </div>
    )
}



export default Question;