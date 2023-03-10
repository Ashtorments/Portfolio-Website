import React from 'react'
import Resume from '../../assets/Resume.pdf'

const Buttons = () => {
  return (
    <div className='buttons'>
        <a href={Resume} download className='btn'>Donload Resume</a>
        <a href="#Contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default Buttons