import React from 'react'


const Answer = (props) => {
    // const answersArr = props.answers.map(ans => ans.answer)

    return(

        <div>
            {/* <p><strong>Answer Choice: </strong></p> */}
            <br/><br/>
            <button class="ansBtn">{props.answer.answer}</button>
        </div>

    )
}



export default Answer;