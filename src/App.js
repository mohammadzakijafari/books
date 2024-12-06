import { useState } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App () {

    // Creating books state variable
    const [books, setBooks] = useState([]);

    // handling create book function
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 999),
                title
            }
        ]
        setBooks(updatedBooks);
    }
   
    // handling delete book function
    const deleteBook = (id) => {
        const deletedBook = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(deletedBook);
    }

    // handling delete book function
    const editBookById = (id, newTitle) => {
        const editedBook = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(editedBook);
    }

    return (
        <div className="app">
            <h1> Reading List </h1>
            <BookList books = { books } onDelete = { deleteBook } onEdit = { editBookById } />
            <CreateBook onCreate = {createBook } />
        </div>
    )
}

export default App;