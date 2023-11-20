import React from 'react'
// import {MdOutlineMail} from 'react-icons/md'

import './InContact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
// import emailjs from 'emailjs-com'
import {BsLinkedin} from 'react-icons/bs'



export default function InContact() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_ixr2l38', 'template_a5tbqed', form.current, '3IcVyBX6wbTfYu3bw')
    // e.target.reset()
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>cellustechindia@gmail.com</h5>
          <a href='mailto:cellustechindia@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Cellus Tech India</h5>
          <a href='https://m.me/' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 9416922877</h5>
          <a href='https://api.whatsapp.com/send?phone+919416922877' target='_blank'>Send a message</a>
        </article>

        </div>
        {/* end of contact options */}
        <form  >
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}