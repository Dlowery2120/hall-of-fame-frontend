// import React from 'react'

//     showGame = () => {
//         this.setState({
//             gameChoice: true
//         })
//     }
//     startGame = () => {
//         if (this.state.gameEdition === "Classic") {
//         // this.classicStartGame()}
//         this.setState({
//             gameStart: false,
//             gameChoice: false,
//             initialGameState: false
//         })
//     }
//     resetSelection = () => {
//         this.setState({
//             initialGameState: true,
//             gameScore: 0,
//             gameReset: false,
//             startClassic: false,
//             startDoubleSpeed: false,
//             startHalfSpeed: false,
//             startReverse: false,
//             questionNum: 0
//         })
//     }
//     classicEdition = () => {
//         this.setState({
//             gameEdition: 'Classic',
//             gameStart: true
//         })
//     }
//     classicStartGame = () => {
//         this.setState({
//             startClassic: true,
//             questionNum: this.state.questionNum + 1
//         })
//         this.loadNewQuestion()
//     }
//     doubleSpeedEdition = () => {
//     }
//     halfSpeedEdition = () => {
//     }
//     reverseEdition = () => {
//     }
//     checkAnswer = () => {
//         this.setState({
//             questionNum: this.state.questionNum +1
//         })
//         this.otherCheck(e)
//     }
//     otherCheck = () => {
//     }
//     gameOver = () => {
//     }




// >>>>>>>>>
// import React, { Component } from 'react';
// import Song from './Song.js'
// import SearchBar from './SearchBar'
// class SongsMapped extends Component {
//     state={
//         sortedSongs: [],
//         fullSongsArray: []
//     }

//     shuffle = (array) => {
//         let currentIndex = array.length, temporaryValue, randomIndex;

//         while (0 !== currentIndex) {
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex -= 1;
//           temporaryValue = array[currentIndex];
//           array[currentIndex] = array[randomIndex];
//           array[randomIndex] = temporaryValue;
//         }
      
//         return array;
//     }

//     sortArrayFx = (e) => {
//     const sortedArray = this.props.array.filter(song => 
//         song.full_title.toLowerCase().includes(e.target.value))
//         this.setState({ 
//             sortedSongs: this.shuffle(sortedArray)
//         })
//     }


//     componentDidMount() {
//         const fullSongs = this.props.array.filter(song => song.title !== "")
//         this.setState({
//             fullSongsArray: this.shuffle(fullSongs)
//         })
//     }
      
//       render() {
//         return(
//             <div>
//             {console.log(this.props.array)}
//             <SearchBar filter={this.sortArrayFx}/>
//             {this.state.sortedSongs.length > 0 ? (this.state.sortedSongs.map(aArray => <Song songArray={aArray}/>)) : (this.state.fullSongsArray.map(bArray => <Song songArray={bArray}/>))}
//             </div>
//         );
//       }
//     }
//  export default SongsMapped;