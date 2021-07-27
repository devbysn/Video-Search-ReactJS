import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment inverted">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label style={{ color: "red" }}>Search video here</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            style={{ background: "rgb(53, 53, 53)" }}
            className="ui segment inverted"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
