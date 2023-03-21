import React from 'react'
import './Experience.css'
import { FaHandPointRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import {fadeIn} from '../../variants';

const Experience = () => {
    return (
        <section id='experience'>
            <h5> What skills I Have</h5>
            <h2> My Expertise</h2>

            <div className="container experience_container">
                <motion.div 
                variants={fadeIn('right',0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.5}}
                className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>BootStrap</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                           <div>
                           <h4>Angularjs</h4>
                            <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>Expressjs</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                           <div>
                           <h4>Sass</h4>
                            <small className='text-light'>Beginner</small>
                           </div>
                        </article>
                    </div>
                    <h3>Content Management System</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>WordPress</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('left',1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:1}}
                className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>Nodejs</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>.Net</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>Java</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                    <h3>DataBase</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                            <div>
                            <h4>SQL</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                    <h3>Version Control System</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHandPointRight className='experience_details-icon'/>
                           <div>
                           <h4>Git</h4>
                            <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                    </div>
                    
                </motion.div>
            </div>

        </section>
    )
}

export default Experience