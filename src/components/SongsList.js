import React, { Component } from 'react';
import Song from './Song.js'
import SongsMapped from './SongsMapped'
const SongsList = (props) => {

    const myArray = props.allArtists.map(artist=>artist.response.hits.map(app => app.result))
    const aArray = myArray.map(res => res)
       return(
        <div>

             {myArray[1] != undefined ? (myArray.map(arr => <SongsMapped array={arr}/>)) : null}

        </div>
        );
      }

    
 export default SongsList;