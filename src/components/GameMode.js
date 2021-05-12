
import React from 'react'
import Question from './Question.js'
import Answer from './Answer.js'
import Timer from './Timer'



const GameMode = (props) => {
    return(
        <div>
            <button class="gamemodeBtn">{props.gamemode.mode}</button>
            <br/> <br/>
            <Timer/>
            <Question questions={props.questions} songs={props.songs} questionRenderChoices={props.questionRenderChoices} questionGetRandom={props.questionGetRandom} answers={props.answers} />
            <div>
            <br/>
            {props.answers.map(singleAnswer => <Answer key={singleAnswer.id} answer={singleAnswer}/>)}
            <br/><br/><br/><br/><br/>
            </div>
        </div>
    )
}



export default GameMode;
