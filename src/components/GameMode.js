import React from 'react'
import Question from './Question.js'
import Answer from './Answer.js'

const GameMode = (props) => {
    return(
        <div>
            <button >{props.gamemode.mode}</button><br/><br/>
            <Question questions={props.questions}/>
            <Answer />

            
        </div>
    )
}



export default GameMode;
