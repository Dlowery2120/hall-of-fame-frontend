import React, { Component } from 'react';
import GamePage from '../components/GamePage.js';
import Song from '../components/Song.js';
import SearchBar from '../components/SearchBar';

class TriviaContainer extends Component {
	state = {
		gamemodes: [],
		filteredSongs: [],
		questions: [ { value: '' } ],
		answers: [ { value: '' } ],
		songs: [ { value: '' } ],
		songInfo: [ 'hi' ],
		artistInfo: {
			response: {
				hits: [
					{
						result: {
							primary_arist: {
								name: ''
							}
						}
					}
				]
			}
		},
		audio: ''
	};

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

		const test = 'Kendrick%20Lamar';

		fetch(`https://genius.p.rapidapi.com/search?q=${test}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '0cafc7e271mshe602d6d7c0ab4dep1f3ac8jsne8fcddaeb24a',
				'x-rapidapi-host': 'genius.p.rapidapi.com'
			}
		})
			.then((res) => res.json())
			.then((response) =>
				this.setState({
					artistInfo: response
				})
			)
			.catch((err) => {
				console.error(err);
			});
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
				{/* <GamePage gamemodesArr={this.state.gamemodes} songsArr={this.state.songs} questionsArr={this.state.questions} questionRenderChoices={this.questionRenderChoices} questionGetRandom={this.questionGetRandom} answers={this.state.answers}/> */}
			</div>
		);
	}
}

export default TriviaContainer;
