import React from 'react'
import './education.css'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import { motion } from "framer-motion"
import {fadeIn} from '../../variants'

const Card = (props) => {
    return (
        <div className="timeline_item">
            <div className="icon"> {props.icon}</div>
            <span className="timeline_date">{props.year}</span>
            <h3 className="timeline_title">{props.title}</h3>
            <p className="timeline_text">{props.desc}</p>
        </div>
    )
}

const data = [
    {
        id: 1,
        icon: <FaGraduationCap/>,
        title: "Bachelors in Engineering",
        year: "2018-2022",
        desc: "Electronics and Communication Engineering, Reva University, Bengaluru. Here, I made 2 college projects on machine learning. Face-mask detection with a COVID-19 theme for the minor project and Sign Language Recognition using Convolution Neural Network for the major."
    },
    {
        id: 2,
        icon: <BiBriefcaseAlt2/>,
        title: "Freelance frontend developer",
        year: "2022-present",
        desc: "I have experience as a project-based freelancer at Intelliquant Technomy Pvt. Ltd. Initially, I focused on creating WordPress projects, but eventually transitioned to full-stack projects with a team. In my most recent work for DTS, I designed the user interface for several components and utilized Angular to call data from the backend API. I also created and implemented services for each component, and developed new components such as the email center and dashboard from scratch. Additionally, I conducted testing and debugging for all the features of the project."
    }

]
const education = () => {
    return (
        <section className="education container section" id="education">
            <h2 className="section_title">Education and Experience</h2>
            <div className="education_container grid">
                <div
                className="timeline grid">
                    {data.map(({id, icon, year, title, desc}) => {
                        return (
                            <Card key={id} icon={icon} title={title} year={year} desc={desc} />
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default education