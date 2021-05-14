import React, { Component } from 'react'


class Song extends Component {

    render() {
      // console.log(this.props.songArray)
        return (
          <div>
            <div>
              <h1>{this.props.songArray.title}</h1>
              <img className="song-art" src={this.props.songArray.song_art_image_url}></img>
              <h5>{this.props.songArray.full_title}</h5>
            </div>
          </div>
        );
      }
    }
    
    export default Song;