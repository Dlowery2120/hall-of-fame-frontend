import React, { Component } from 'react';

class Song extends Component {
;
	render() {
		return (
			<div class="container-fluid">
        <div class=" g-4">
          <div class="col">
            <div class="card">
            <h1 className="card-title">{this.props.songArray.title !== undefined ? this.props.songArray.title : null}</h1>
              <img src={this.props.songArray.song_art_image_url !== undefined ? this.props.songArray.song_art_image_url : null} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.songArray.full_title !== undefined ? this.props.songArray.full_title : null}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Song;

