import React from 'react'
import Question from './Question.js'
import Answer from './Answer.js'

const GameMode = (props) => {
    return(
        <div>
            <button class="gamemodeBtn">{props.gamemode.mode}</button>
            <Question questions={props.questions} questionRenderChoices={props.questionRenderChoices} questionGetRandom={props.questionGetRandom} />
            <div>
            <br/>
            {props.answers.map(singleAnswer => <Answer key={singleAnswer.id} answer={singleAnswer}/>)}
            <br/><br/><br/><br/><br/>
            </div>
        
        </div>
    )
}



export default GameMode;
