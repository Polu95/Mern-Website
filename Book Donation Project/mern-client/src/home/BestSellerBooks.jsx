import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")//api
      .then(res => res.json())
      .then(data => setBooks(data.slice(0,3)));
  }, []);
//passing the books from const to the Bookcards
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  );
}

export default BestSellerBooks;
