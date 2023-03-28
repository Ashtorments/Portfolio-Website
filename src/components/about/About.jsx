import React from 'react'
import './About.css'
import GradPic4 from '../../assets/GradPic4.jpg'
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import {fadeIn} from '../../variants';
import { useInView } from 'react-intersection-observer';

const About=()=> {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section id='about' ref={ref}>
            <h2>About Me</h2>

            <div className="container about_container">
                <motion.div 
                variants={fadeIn('right',0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:true, amount:0.2}}
                className="about_me">
                    <div className="about_me-image">
                        <img src={GradPic4} alt=""/>
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn('left',0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:true, amount:0.2}}
                className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView  ? <CountUp start={0} end= {1} duration={5} /> : null}
                            </div>
                            <h6>Year of</h6>
                            <h5>Experience</h5>
                        </article>
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView ? <CountUp start={0} end= {10} duration={5}/> : null}
                            </div>
                            <h5>Projects</h5>
                            <h6>Completed</h6>
                        </article>
                        <article className='about_card'>
                            <div className='about_count'>
                            {inView ? <CountUp start={0} end= {8} duration={5}/> : null}
                            </div>
                            <h5>Happy Clients</h5>
                        </article>
                    </div>

                    <p>As a self-taught web developer, I have honed my skills by building a range of components and projects. My passion lies in developing front-end web applications and staying up-to-date with new tools, frameworks, and libraries. After graduating from Reva University in Bengaluru last year, I began working on real-time WordPress projects for clients. As I gained more experience, I transitioned to HTML, CSS, and JavaScript, building personal and professional projects along the way. I also delved into JavaScript frameworks such as Angular, Node.js, and React, working on large-scale full-stack projects. Recently, I've also started learning backend frameworks like Asp.net.
                        <br/>One of my favorite aspects of web development is being creative with styling, constantly tweaking and exploring new concepts, libraries, and frameworks. Moving forward, I am excited to work alongside professionals and continue growing both personally and professionally.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </motion.div>
            </div>
        </section>
    );
}

export default About