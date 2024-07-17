import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
	const books = useContext(BooksContext);

	useEffect(() => {
		books.fetchBooks();
	}, []);

	return (
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
