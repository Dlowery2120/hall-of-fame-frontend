import React from 'react';

const Question = (props) => {
    // let questionArrFx = props.questions.map(data => data.question)
    // questionRandomizer={this.questionRandomizer}
    const testRandom = () => {
        let questionArrFx = props.questions.map(data => data.question)
        // {console.log(questionArrFx)}
        let qArr = [...questionArrFx]
        let randomizedArr = []
        
        while (qArr.length > 0) {
            let questionIndex = Math.floor(Math.random() * qArr.length)
            randomizedArr.push(qArr[questionIndex])
            qArr.splice(questionIndex, 1) 
            // need to take out piece of array and then we can loop again
        }
        return randomizedArr[0] // our loop is finished so now we can return the random array
        
    }
    



    return(

        <div>
            {/* {console.log(testRandom)} */}
            {/* <p><strong>{props.questions[0].question}</strong></p> */}

            <h3>{testRandom()}</h3>
            <button onClick={() => props.questionRenderChoices()}>TEST BUTTON</button>


        </div>
    )
}



export default Question;