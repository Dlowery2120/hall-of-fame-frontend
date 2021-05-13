import React, { Component } from 'react';

class Song extends Component {
	countOfIndex = this.props.artistInfo.response.hits.countOfIndex;
	render() {
		return (
			<div class="container songs-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.artistInfo.response.hits[0].result.song_art_image_url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{this.props.artistInfo.response.hits[0].result.full_title}</h5>
                <p class="card-text">{this.props.artistInfo.response.hits[0].result.title}</p>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default Song;

{
	/* //     var i; */
}
{
	/* // for (i = 0; i < cars.length; i++) { */
}
{
	/* //   text += cars[i] + "<br>";
// }

//   <img className="song-art" src={this.props.artistInfo.response.hits[0].result.song_art_image_url} />
// <p>{this.props.artistInfo.response.hits[0].result.full_title}</p>
// <p>Song Title: {this.props.artistInfo.response.hits[0].result.title}</p>
// </div> */
}

{
	/* <div>
<img src="..." class="card-img-top" alt="...">
</div>
<div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div> */
}
