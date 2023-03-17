import React from 'react'
import './Footer.css'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        
        <footer>
            <a href="#" className='footer_logo'>Ayush</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="experience">Skills</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>

            </ul>

            <div className="footer_socials">
                <a href="https://facebook.com"><FiFacebook /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"></a>

            </div>
            <div className="footer_copyright">
                <small>&copy; AYUSH RAI. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer