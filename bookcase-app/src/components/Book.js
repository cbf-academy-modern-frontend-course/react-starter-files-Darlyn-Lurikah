import React from 'react';

function Book({book}) {
  return <div>
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail}></img>
    </div>
};

export default Book;
