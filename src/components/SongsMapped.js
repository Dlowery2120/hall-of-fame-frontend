import React, { Component } from 'react';
import Song from './Song.js'
import SearchBar from './SearchBar'
class SongsMapped extends Component {
    state={
        sortedSongs: [],
        fullSongsArray: []
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
    const sortedArray = this.props.array.filter(song => 
        song.full_title.toLowerCase().includes(e.target.value))
        this.setState({ 
            sortedSongs: this.shuffle(sortedArray)
        })
    }


    componentDidMount() {
        const fullSongs = this.props.array.filter(song => song.title !== "")
        this.setState({
            fullSongsArray: this.shuffle(fullSongs)
        })
    }
      
      render() {
          return(
        <div>
            {console.log(this.props.array)}
        <SearchBar filter={this.sortArrayFx}/>
        {this.state.sortedSongs.length > 0 ? (this.state.sortedSongs.map(aArray => <Song songArray={aArray}/>)) : (this.state.fullSongsArray.map(bArray => <Song songArray={bArray}/>))}

        </div>
        );
      }
    }
 export default SongsMapped;


//  <TransactionsList purchases={this.state.filteredPurchases.length > 0 ? this.state.filteredPurchases : this.state.purchases} filterPurchase={this.filterType} />

