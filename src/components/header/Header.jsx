import React from 'react'
// import './header.css'

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
                    <link to="/contact" className='flat-button'>Contact Me!</link>
                </div>
            </div>
        </header>
    )
}

export default Header