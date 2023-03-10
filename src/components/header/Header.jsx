import React from 'react';
import './Header.scss';
import Buttons from './Buttons';
// import { Link } from 'react-router-dom';
// import '../../App.scss';
// import '../../index.css';

const Header = () => {
    return (
            <div className="container header-container">
                <div className="text-zone">
                    <h1>Hi, <br/> I'm 
                    Ayush
                    <br/>
                    Web developer
                    </h1>
                    <h2>Frontend Developer </h2>
                    <Buttons/>
                    {/* <Link to="/contact" className='flat-button'>Contact Me!</Link> */}
                </div>
            </div>
    )
}

export default Header