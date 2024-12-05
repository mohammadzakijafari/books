import BookShow from "./BookShow";

function BookList ({ books, onDelete }) {

    // mapping through list of books and passing it to book show component
    const renderedBooks = books.map((book) => {
        return <BookShow book = { book } key = { book.id } onDelete = { onDelete } />
    });

    return (
        <div className=""> { renderedBooks } </div>
    )
}

export default BookList;