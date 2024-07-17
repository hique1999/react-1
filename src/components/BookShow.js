import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
	const books = useContext(BooksContext);
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		books.deleteBookById(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(!showEdit);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}

	return (
		<div className='book-show'>
			<div>{content}</div>
			<div className='actions'>
				<button className='edit' onClick={handleEditClick}>
					Edit
				</button>
				<button className='delete' onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
