import React from 'react';

function Book({book}) {
  return <h1>{book.volumeInfo.title}</h1>;
}

export default Book;
