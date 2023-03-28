import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/in/ayush-rai-b12808236/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ashtorments" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/ayush.rai.902/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default Socials