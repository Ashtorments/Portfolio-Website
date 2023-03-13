import React from 'react'
import './Navbar.css'
import {BiHome} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {BiMailSend} from 'react-icons/bi';
import {BiNetworkChart} from 'react-icons/bi';
import {FaLaptopCode} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <navbar>
            <a href="#" onClick={()=> setActiveNav('#')}className={activeNav ==='#' ? 'active': ''} ><BiHome/></a>
            <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav==='#About'?'active':''}><BiUser/></a>
            <a href="#Projects" onClick={()=>setActiveNav('#Projects')} className={activeNav==='#Projects'?'active':''}><FaLaptopCode/></a>
            <a href="#Services" onClick={()=>setActiveNav('#Services')} className={activeNav==='#Services'?'active':''}><BiNetworkChart/></a>
            <a href="#Contact" onClick={()=>setActiveNav('#Contact')} className={activeNav==='#Contact'?'active':''}><BiMailSend/></a>
            </navbar>
    )
}

export default Navbar