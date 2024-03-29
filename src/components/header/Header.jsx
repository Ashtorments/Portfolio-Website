import React, { useEffect, useState } from 'react';
import './Header.css';
import Buttons from './Buttons';
import Mypicture from '../../assets/Mypicture.jpeg';
import Socials from './Socials';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Header = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', ' ', 'A', 'y', 'u', 's', 'h']
    const jobArray = ['w', 'e', 'b', ' ', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timerId);
        }
    }, []);

    const handleToggle = () => {
        const toggle = document.querySelector('.mypicture')
        toggle.classList.toggle('active');
    }

    return (
        <header >
            <div className="container header-container">
                <div className='text'>
                    <h1 className='h1'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>

                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <small>Hover/Touch above</small>
                    <Buttons />
                </div>
                <Socials />
                <div className='logo'>
                <small>Click Above to see skills!</small>

                    <div className="mypicture" onClick={handleToggle}>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                    </div>
                    <img src={Mypicture} alt="" />
                </div>

            </div>

        </header>
    )
}

export default Header
