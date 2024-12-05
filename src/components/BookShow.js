function BookShow ({ book, onDelete }) {

    // Handling delete button
    const handleDeleteClick = () => {
        onDelete(book.id);
    }


    return (
        <div className="book-show">
            { book.title }

            <div className="actions">
                <div className="delete" onClick = { handleDeleteClick }> Delete </div>
            </div>
        </div>
    )
}

export default BookShow;