import React from 'react';
import leftImage from '../assets/pizzaLeft.jpg';
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
    <div className="leftSide" style={ { backgroundImage: `url(${leftImage})`}}></div>
    <div className="rightSide">
        <h1>Contact Us</h1>

        <form action="" id='contactFrom' method='POST '>
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' placeholder='Enter your full name.' />

            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Enter your email.' />
            
            <label htmlFor="message">Message</label>
            <textarea name="emssage" id="" cols="30" rows="10" placeholder='Enter message'> </textarea>

            <button type='submit'>Send message</button>
        </form>
    </div>
    </div>
  )
}
