import React, { useEffect, useState } from "react";
import { search, getAll } from "./BookAPI";
import Book from "./book";

function BookSearch(props) {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(1);
  useEffect(() => {
    getAll().then((allBooks) => {
      setAllBooks([]);
      setAllBooks(allBooks);
    });
  }, []);
  useEffect(() => {
    props.str.length == 0
      ? setBooks([])
      : search(props.str).then((books) => {
          if (books?.length > 0) setBooks(books);
          else setBooks([]);
        });
  }, [props.str]);
  return (
    <>
      {books?.map((book) => (
        <Book book={allBooks.find((e) => e.id == book.id) || book} update={() => setUpdate(Date.now())} />
      ))}
    </>
  );
}
export default BookSearch;
