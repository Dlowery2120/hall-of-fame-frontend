import React, { Component } from 'react';
import Song from './Song.js'
import SongsMapped from './SongsMapped'
const SongsList = (props) => {

    const myArray = props.allArtists.map(artist=>artist.response.hits.map(app => app.result))
    const aArray = (myArray.filter(arr => arr.length > 5))
    const bArray = aArray.flat()
       return(
        <div>
        {/* {bArray[1] != undefined ? (bArray.map(arr => <SongsMapped array={arr}/>)) : null} */}
        {aArray[1] != undefined ? (aArray.map(arr => <SongsMapped array={arr}/>)) : null}

        </div>
        );
      }

    
 export default SongsList;