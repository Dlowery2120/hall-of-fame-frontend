import React, { Component } from 'react';
import Song from './Song.js'

const SongsList = (props) => {

    const myArray = props.allArtists.map(artist=>artist.response.hits.map(app => app.result))
    const aArray = myArray.map(res => res)
       return(
        <div>
            {/* {console.log(props.allArtists.map(artist=>artist.response.hits.map(app => app.result)))}
             */}
             {console.log(aArray)}
            {/* {props.allArtists.response.hits.map(artist => <Song name={artist.result.title} title={artist.result.full_title} picture={artist.result.song_art_image_url}/>)} */}
            {/* {responseArray[1].hits.map(artist => <Song name={artist.result.title} title={artist.result.full_title} picture={artist.result.song_art_image_url}/>)} */}
        </div>
        );
      }

    
 export default SongsList;