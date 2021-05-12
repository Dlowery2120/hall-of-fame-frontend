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
            qArr.splice(questionIndex, 1) 
            // need to take out piece of array and then we can loop again
        }
        return randomizedArr[0] // our loop is finished so now we can return the random array
        
    }
    
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

    return(

        <div>
            {/* {console.log(wrongChoices())} */}
            {/* {console.log(answerArray(), answerXArray(), answerYArray(), answerZArray())} */}
            {/* <p><strong>{props.questions[0].question}</strong></p> */}

            <h3>{questionsRandomized()}</h3>
            <button className="ansBtn">A: {aCheck()}</button><br/><br/>
            <button className="ansBtn">B: {bCheck()}</button><br/><br/>
            <button className="ansBtn">C: {cCheck()}</button><br/><br/>
            <button className="ansBtn">D: {dCheck()}</button>
            {/* <button onClick={() => props.questionRenderChoices()}>ignore this btn</button> */}
        </div>
    )
}



export default Question;