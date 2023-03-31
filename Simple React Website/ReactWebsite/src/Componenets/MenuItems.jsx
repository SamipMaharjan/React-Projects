import React from 'react'

export default function MenuItems({ image, name, price }) {
  return (
    <div className='menuItem'>
     <div style={{ backgroundImage: `url(${image})`}}></div> 
     <h1> {name} </h1> 
     <p> {price} </p> 
    </div>
  )
} 
