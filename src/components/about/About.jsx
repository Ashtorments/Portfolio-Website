import React from 'react'
import './About.css'
import GradPic4 from '../../assets/GradPic4.jpg'
import { useRef, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About=()=> {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section id='about' ref={ref}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={GradPic4} alt=""/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView  ? <CountUp start={0} end= {13} duration={3} /> : null}
                            </div>
                            <h5>Experience</h5>
                        </article>
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView ? <CountUp start={0} end= {13} duration={3}/> : null}
                            </div>
                            <h5>Projects</h5>
                        </article>
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView ? <CountUp start={0} end= {13} duration={3}/> : null}
                            </div>
                            <h5>Happy Clients</h5>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur ab tempore culpa rerum quisquam unde earum minus, vitae maxime ratione facilis, quidem consectetur perspiciatis sint! Libero sunt minus eligendi!</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About