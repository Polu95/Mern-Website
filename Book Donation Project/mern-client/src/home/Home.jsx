import React from 'react'
import Banner from '../components/Banner'
import Review from './Review'
import BestSellerBooks from './BestSellerBooks'



const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <Review/>
    </div>
  )
}

export default Home
