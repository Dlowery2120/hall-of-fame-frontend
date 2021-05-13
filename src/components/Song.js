import React, { Component } from 'react'


class Song extends Component {

    render() {
        return (
          <div>
            <div>
              <h3>{this.props.name}</h3>
              <img className="song-art" src={this.props.picture}></img>
              <p>{this.props.title}</p>
            </div>
          </div>
        );
      }
    }
    
    export default Song;