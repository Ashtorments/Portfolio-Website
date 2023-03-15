import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='Contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me!</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>ayushrai420559@gmail.com</h5>
                        <a href="mailto:ayushrai@420559@gmail.com">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>9340499553</h5>
                        <a href="https://api.whatsapp.com/send?phone=9340499553">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact