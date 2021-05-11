import React from 'react';

const Question = (props) => {
    let questionArrFx = props.questions.map(data => data.question)
    return(

        <div>
            {/* {console.log(questionArrFx)} */}
            <p><strong>{props.questions[0].question}</strong></p>
            {/* <p>{questionArrFx}</p> */}
        </div>
    )
}



export default Question;