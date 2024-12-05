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

    return (
        <div className="app">
            <BookList books = { books } onDelete = { deleteBook } />
            <CreateBook onCreate = {createBook } />
        </div>
    )
}

export default App;