import React, { Component } from 'react';

class Song extends Component {
    removeSong =(e) => {
        e.target.parentElement.parentElement.innerHTML=''
    }

    render() {
      return(
          <div className="container songs-container" >

                  <div className="col">
                      <div className="card">
                          <h1 className="card-title">{this.props.songArray.title !== undefined ? this.props.songArray.title : null}</h1>
                          <img className="card-img-top" alt="..." src={this.props.songArray.song_art_image_url !== undefined ? this.props.songArray.song_art_image_url : null}></img>
                          <div className="card-body">
                              <h5 className="card-text">{this.props.songArray.full_title !== undefined ? this.props.songArray.full_title : null}</h5>
                              <button className="card-text btn btn-secondary" onClick={(e)=>this.removeSong(e)}>Remove Song</button>
                          </div>
                      </div><br/><br/>
                  </div>
              </div>

      )
  }
}
export default Song;

