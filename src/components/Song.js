import React, { Component } from 'react'


class Song extends Component {

    render() {
        return (
          <div>
              {console.log(this.props.artistInfo.response.hits[0].result)}
              {/* {console.log(this.props.artistInfo)} */}
          <img className="song-art" src={this.props.artistInfo.response.hits[0].result.song_art_image_url}></img>
          <p>{this.props.artistInfo.response.hits[0].result.full_title}</p>
          <p>Song Title: {this.props.artistInfo.response.hits[0].result.title}</p>
          </div>
        );
      }
    }
    
    export default Song;