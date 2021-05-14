import React from "react";

const SearchBar = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search Songs"}
        onChange={(e) => {props.filter(e)}}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default SearchBar;