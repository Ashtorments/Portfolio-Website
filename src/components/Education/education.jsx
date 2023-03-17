import React from 'react'
import './education.css'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import Card from './Card'

const data = [
    {
        id: 1,
        icon: <FaGraduationCap/>,
        title: "Bachelors in Engineering, Reva University",
        year: "2018-2022",
        desc: "Electronics and Communication Engineering"
    },
    {
        id: 2,
        icon: <BiBriefcaseAlt2/>,
        title: "Freelance frontend developer",
        year: "2022-present",
        desc: "Freelancing at Intelliquant Technomy pvt. ltd."
    }

]
const education = () => {
    return (
        <section className="education container section" id="education">
            <h2 className="section_title">Education and Experience</h2>
            <div className="education_container grid">
                <div className="timeline grid">
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