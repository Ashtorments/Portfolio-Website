import React from 'react'
import './Footer.css'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

const Footer = () => {
    return (
        
        <footer>
            <a className='footer_logo'>© Ayush Rai 2023. All Rights Reserved.</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="experience">Skills</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>

            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/ayush.rai.902/"><FiFacebook /></a>
                <a href="https://www.instagram.com/ayushtorments/"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/ayush-rai-b12808236/"><FiLinkedin/></a>

            </div>
            <div className="footer_copyright">
                <small>&copy; AYUSH RAI. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer