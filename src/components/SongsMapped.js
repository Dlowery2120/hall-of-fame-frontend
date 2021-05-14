import React, { Component } from 'react';
import Song from './Song.js'

const SongsMapped = (props) => {

       return(
        <div>
            {/* <h1>HELLO</h1> */}

        {props.array !== undefined ? (props.array.map(newArray => <Song songArray={newArray}/>)) : null}
        </div>
        );
      }

    
 export default SongsMapped;