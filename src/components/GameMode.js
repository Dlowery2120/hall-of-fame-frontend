
import React from 'react'
import Question from './Question.js'
import Answer from './Answer.js'
import Timer from './Timer'



class GameMode extends React.Component {
  state = {
    displayMode: false
  }
  
  handleClick = () => {
    this.setState({displayMode: !this.state.displayMode})
  }

  // toggleMode = () => {
  //   this.setState({displayMode: !this.state.displayMode})
  // }
  
  render() {
    return(
        <div>
            <button class="gamemodeBtn" onClick={this.handleClick}>{this.props.gamemode.mode}</button>
            <br/> <br/>
            {this.state.displayMode ? <Timer/> : false}
            {this.state.displayMode ? <Question 
            questions={this.props.questions} 
            songs={this.props.songs} 
            questionRenderChoices={this.props.questionRenderChoices} 
            questionGetRandom={this.props.questionGetRandom} 
            answers={this.props.answers}
             /> : false}
            <div>
            <br/>
            {this.props.answers.map(singleAnswer => <Answer key={singleAnswer.id} answer={singleAnswer}/>)}
            
            </div>
        </div>
    )}
}



export default GameMode;
