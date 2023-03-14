import React from 'react'
import './Projects.css'
import WeatherApp from '../../assets/WeatherApp.jpg'

const data = [
  {
    id: 1,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 2,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 3,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 4,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 5,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 6,
    image: WeatherApp,
    title: "Live Weather App",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://ashtorments.github.io/Weather-App/'
  }
]

const Projects = () => {
  return (
    <section id='Projects'>
      <h5>My Recent Personal Projects</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {
          data.map(({ id, image, title, github, demo})=>{
            return(
              <article key={id} className='projects_item'>
          <div className="projects_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="projects_item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )          
          })
        }
        

        
      </div>
      </section>
  )
}

export default Projects