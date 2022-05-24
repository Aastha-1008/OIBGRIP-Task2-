import React from 'react';
import './Contact.css';
import imag from './undraw2.svg';

export default function Contact() {
  return (
    <div className='Contact-container'>
        <div className='contact-heading'>
            <h1>Contact Me </h1>
            <p>Lets Keep In Touch</p>
        </div>
        <div className='Contact-information'>
            <div className='first-box'>
                <h1>Get In Touch</h1>
                <img src={imag} alt="email"/>
            </div>
            <div className='second-box'>
                <form>
                    <h1>Name</h1>
                    <input type = 'text'></input>
                    <h1>Email</h1>
                    <input type='text'></input>
                    <h1>Message</h1>
                    <textarea row="4" cols="20"></textarea>
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
