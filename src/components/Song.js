import React, { Component } from 'react';

class Song extends Component {
  render() {
      return(
          <div className="container songs-container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                      <div className="card">
                          <h1 className="card-title">{this.props.songArray.title !== undefined ? this.props.songArray.title : null}</h1>
                          <img className="card-img-top" alt="..." src={this.props.songArray.song_art_image_url !== undefined ? this.props.songArray.song_art_image_url : null}></img>
                          <div className="card-body">
                              <h5 className="card-text">{this.props.songArray.full_title !== undefined ? this.props.songArray.full_title : null}</h5>
                              <p>Check song lyrics<a href={this.props.songArray.url !== undefined ? this.props.songArray.url : null} target="_blank" rel="noopener noreferrer"> here</a>.</p>
                              <button>DELETE</button>
                          </div>
                      </div><br/><br/>
                  </div>
              </div>
          </div>
      )
  }
}

export default Song;
