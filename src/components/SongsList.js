import React, { Component } from 'react';
import Song from './Song.js'
import SongsMapped from './SongsMapped'
import SearchBar from './SearchBar'
class SongsList extends Component {
    state={
        allSongs: [],
        sortedSongs: []
    }
    // myArray = props.allArtists.map(artist=>artist.response.hits.map(app => app.result))
    // aArray = (myArray.filter(arr => arr.length > 5))


    componentDidMount(){
    const myArray = this.props.allArtists.map(artist=>artist.response.hits.map(app => app.result))
    const aArray = (myArray.filter(arr => arr.length > 5))
    const bArray = aArray.flat()
    this.setState({
        allSongs: bArray
        })
    }

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    sortArrayFx = (e) => {
        const sortedArray = this.state.allSongs.filter(song => 
            song.full_title.toLowerCase().includes(e.target.value))
            this.setState({ 
                sortedSongs: this.shuffle(sortedArray)
            })
    }

    render(){
       return(
        <div>
        {/* {console.log(this.props.allArtists)} */}
        <SearchBar filter={this.sortArrayFx}/>
        {/* <SongsMapped array={this.state.sortedSongs.length > 0 ? this.state.sortedSongs : this.state.allSongs}/> */}
        {this.state.sortedSongs.length > 0 ? this.state.sortedSongs.map(songA => <Song songArray={songA}/>) : this.state.allSongs.map(songB => <Song songArray={songB}/>)}


        {/* ***working code*** */}
        {/* {aArray[1] != undefined ? (aArray.map(arr => <SongsMapped array={arr}/>)) : null} */}
        </div>
        );
      }
    }

    
 export default SongsList;