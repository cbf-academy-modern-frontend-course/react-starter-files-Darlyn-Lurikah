import React, { useState } from 'react';


function Book({book}) {
  return <div>
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
      {book ? (
      <p>£{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
    
    </div>
};

export default Book;
