import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Book from "./book.js";
import { getAll } from "./BookAPI";

function App() {
  const [state, setState1] = useState({
    showSearchPage: false,
    searchString: "",
    books: [],
    update: 1,
  });
  const setState = (e) => {
    setState1((c) => ({ ...c, ...e }));
  };
  useEffect(() => {
    getAll().then((books) => {
      setState({ books: [] });
      setState({ books });
    });
  }, [state.update]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {state.books
                    .filter((e) => e.shelf == "currentlyReading")
                    .map((book) => (
                      <Book key={book.id+'l'} book={book} update={() => setState({ update: Date.now() })} />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {state.books
                    .filter((e) => e.shelf == "wantToRead")
                    .map((book) => (
                      <Book key={book.id+'l'} book={book} update={() => setState({ update: Date.now() })} />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {state.books
                    .filter((e) => e.shelf == "read")
                    .map((book) => (
                      <Book key={book.id+'l'} book={book} update={() => setState({ update: Date.now() })} />
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          {/* <button onClick={() => setState({ showSearchPage: true })}>Add a book</button> */}
          <Link to="/Search">
            <button style={{border:'0'}}>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
