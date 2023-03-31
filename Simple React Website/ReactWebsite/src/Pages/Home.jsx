import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
export default function Home() {
  return (
    <div className='home' style={ {backgroundImage: `url(https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>

      <div className="header-container">
      <h1>Pedro's Pizzaria</h1>
      <p>I think I put pizza to fit any taste</p>

      <Link to='/menu' className='order-link'>
        <button>Order Now!!</button>
      </Link>
      </div>
      {/* Header container  */}

    </div>
  )
}
