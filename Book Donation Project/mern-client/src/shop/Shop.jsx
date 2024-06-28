import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
  const [books,setBooks] =useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-12'>

        {
          books.map(book =>  <Card
          >
            <img src={book.imageUrl} alt="" className='h-96'/>
            <h995 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h995>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
            <button className='px-4 py-2 bg-blue-600 text-white rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
