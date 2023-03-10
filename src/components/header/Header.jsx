import React from 'react';
import './Header.css';
import Buttons from './Buttons';
import Mypicture from '../../assets/Mypicture.jpeg';
import Socials from './Socials';
// import { Link } from 'react-router-dom';
// import '../../App.scss';
// import '../../index.css';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <div className="text-zone">
                    <h1>Hi, <br/> I'm 
                    Ayush
                    <br/>
                    Web developer
                    </h1>
                    <h2>Frontend Developer </h2>
                    <Buttons/>
                    <Socials/>
                    <div className="mypicture">
                        <img src={Mypicture} alt="mypicture"/>
                    </div>

                    <a href="#contact" className='scroll-down'>Scroll Down</a>
                    {/* <Link to="/contact" className='flat-button'>Contact Me!</Link> */}
                </div>
            </div>
            </header>
    )
}

export default Header