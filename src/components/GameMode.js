
import React from 'react'
import Question from './Question.js'
import Answer from './Answer.js'
import Timer from './Timer'



const GameMode = (props) => {
    return(
        <div>
            <button >{props.gamemode.mode}</button><br/><br/>
            <Question questions={props.questions}/>
            <Timer/>
            <Answer />

            
        </div>
    )
}



export default GameMode;
