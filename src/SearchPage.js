import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookSearch from "./bookSearch.js";

function SearchPage() {
  const [state, setState1] = useState({
    searchString: "",
  });
  const setState = (e) => {
    setState1((c) => ({ ...c, ...e }));
  };
  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={() => setState({ showSearchPage: false })}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(e) => setState({ searchString: e.target.value })} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookSearch str={state.searchString} />
          </ol>
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
