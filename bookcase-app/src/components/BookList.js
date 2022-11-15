import React, { useState } from 'react';
import data from '../models/books.json';
import Book from './Book';
import addBook from '../App';

const BookList = () => {
    const [books] = useState(data);
    return (
        <div>
    
            {books.map((book) => <Book key={book.id} book={book} addbook={addBook}/>)};
            
        </div>

    )
};

export default BookList;