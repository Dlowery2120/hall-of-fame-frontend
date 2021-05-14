import React, { Component } from 'react';

class Song extends Component {
;
	render() {
		return (
			<div class="container songs-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={this.props.picture} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">placeholder</h5>
                <p class="card-text">placeholder</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.picture} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">placeholder</h5>
                <p class="card-text">placeholder</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={this.props.picture} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">placeholder</h5>
                <p class="card-text">placeholder</p>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default Song;

// emily's code
    // render() {
    //     return (
    //       <div>
    //         <div>
    //           <h3>{this.props.name}</h3>
    //           <img className="song-art" src={this.props.picture}></img>
    //           <p>{this.props.title}</p>
    //         </div>
    //       </div>
    //     );
    //   }
    // }
    
