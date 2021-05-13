import React from 'react';

class SearchBar extends React.Component {
    changeHandler = (e) => {
        {this.props.search(e.target.value)}
      }
	render() {
		return (
			<div className="ui large fluid icon input">
				<input
					type="text"
					placeholder={'Search your by song'}
					  onChange={(e) => this.changeHandler(e)}
				/>
				<i className="circular search link icon" />
			</div>
		);
	}
}

export default SearchBar;
