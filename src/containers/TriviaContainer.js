import React, { Component } from 'react';
import GamePage from "../components/GamePage.js"
import Song from "../components/Song.js"
import SongsList from "../components/SongsList.js"
import SearchBar from '../components/SearchBar';
class TriviaContainer extends Component {
    state={
        songInfo: ['hi'],
        filteredSongs: [],
        artistInfo: {},
        allArtists: [
                {
                response: {
                    hits: [{
                        result:{}
                    }]
                }
            }
        ],
        artistEndpoints: [
            "Kendrick%20Lamar",
            "The%20Weeknd",
            "Taylor%20Swift",
            "6lack%20",
            "Summer%20Walker",
            "The Fray",
            "Drake%20",
            "Bryson%20Tiller",
            "Frank%20Ocean",
            "Doja%20Cat", 
            "Shawn%20Mendes", 
            "MGK%20",
            "Ariana%20Grande",
            "Halsey",
            "Olivia%20Rodrigo",
            "Lauv%20",
            "BLACKPINK%20",
            "LANY%20",
            "The%201975",
            "Sia",
            "Bruno Mars",
            "Dean Lewis",
            "'Lil Wayne",
            "Future",
            "Luke Bryan",
            "Maren Morris",
            "SZA",
            "Joji",
            "88rising",
            "Niki",
            "Billie Eilish",
            "Harry Styles",
            "Justin Bieber",
            "Selena Gomez",
            "Jonas Brothers",
            "5 Seconds of Summer",
            "Keith Urban"
        ]
    }

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/gamemodes').then((res) => res.json()).then((data) =>
			this.setState({
				gamemodes: data
			})
		);

		fetch('https://genius.p.rapidapi.com/artists/16775/songs', {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '0cafc7e271mshe602d6d7c0ab4dep1f3ac8jsne8fcddaeb24a',
				'x-rapidapi-host': 'genius.p.rapidapi.com'
			}
		})
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					songInfo: data
				})
			)
			.catch((err) => {
				console.error(err);
			});

        this.state.artistEndpoints.forEach(endpoint => this.getArtist(endpoint))
    }

    getArtist = (artist) => {
        // this.componentDidMount() 
        fetch(`https://genius.p.rapidapi.com/search?q=${artist}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "0cafc7e271mshe602d6d7c0ab4dep1f3ac8jsne8fcddaeb24a",
            "x-rapidapi-host": "genius.p.rapidapi.com"
            }
            })
            .then(res => res.json())
            .then(response => this.setState({
                allArtists: [...this.state.allArtists, response]
            }))
            .catch(err => {
                console.error(err);
            });
             {{console.log(this.state.allArtists)}}
    }
    
    renderSearch = (searchWords) => {
		const searchResults = this.state.artistInfo.response.hits.filter((transaction) =>
			transaction.description.includes(searchWords)
		)(searchResults);
		this.setState({ filteredSongs: searchResults });
	};

	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4 ">Hits Hall of Fame</h1>
						<p className="lead">
							Song Directory
						</p>
					</div>
				</div>
				<SearchBar search={this.renderSearch} />
				<h1>{this.state.primary_artist}</h1>
				<Song songInfo={this.state.songInfo} artistInfo={this.state.artistInfo} />
                {/* <SongsList songInfo={this.state.songInfo} allArtists={this.state.allArtists} artistEndpoints={this.state.artistEndpoints} artistInfo={this.state.artistInfo} getArtist={this.getArtist}/> */}


				{/* <GamePage gamemodesArr={this.state.gamemodes} songsArr={this.state.songs} questionsArr={this.state.questions} questionRenderChoices={this.questionRenderChoices} questionGetRandom={this.questionGetRandom} answers={this.state.answers}/> */}
			</div>
		);
	}
//     render() {
//     return(
//         <div>
//             {/* {console.log(this.state.allArtists)} */}
//             <SongsList songInfo={this.state.songInfo} allArtists={this.state.allArtists} artistEndpoints={this.state.artistEndpoints} artistInfo={this.state.artistInfo} getArtist={this.getArtist}/>
//             {/* <GamePage gamemodesArr={this.state.gamemodes} songsArr={this.state.songs} questionsArr={this.state.questions} questionRenderChoices={this.questionRenderChoices} questionGetRandom={this.questionGetRandom} answers={this.state.answers}/> */}
//         </div>
//         )
//     }
}

export default TriviaContainer;
