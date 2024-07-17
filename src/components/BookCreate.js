import React, { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
	const [title, setTitle] = useState("");
	const books = useContext(BooksContext);

	const hangleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		books.createBook(title);
		setTitle("");
	};

	return (
		<div className='book-create'>
			<h3>Add a book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input className='input' value={title} onChange={hangleChange} />
				<button className='button'>Create</button>
			</form>
		</div>
	);
}

export default BookCreate;
