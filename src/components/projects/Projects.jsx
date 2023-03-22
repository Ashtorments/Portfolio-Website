import React from 'react'
import './Projects.css'
import WeatherApp from '../../assets/WeatherApp.jpg'
import LoginAuth from '../../assets/LoginAuth.jpg'

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
    title: "Portfolio Website-React",
    github: 'https://github.com/Ashtorments/Portfolio-Website',
    demo: '#'
  },
  {
    id: 3,
    image: WeatherApp,
    title: "PDF Merger Tool",
    github: 'https://github.com/Ashtorments/PDF-Merger-Tool',
    demo: ''
  },
  {
    id: 4,
    image: LoginAuth,
    title: "Login Auth-Angular-Dotnet",
    github: 'https://github.com/Ashtorments/LoginAuth-Angular-dotnet',
    demo: ''
  },
  {
    id: 5,
    image: WeatherApp,
    title: "E-mail Centre-Angular",
    github: 'https://github.com/Ashtorments/Email-center-Angular-',
    demo: ''
  },
  {
    id: 6,
    image: WeatherApp,
    title: "Coding Contest",
    github: 'https://github.com/Ashtorments/Coding-Contests-BootStrap-',
    demo: 'https://github.com/Ashtorments/Coding-Contests-BootStrap-'
  },
  {
    id: 7,
    image: WeatherApp,
    title: "Calculator",
    github: 'https://github.com/Ashtorments/Weather-App',
    demo: 'https://github.com/Ashtorments/Basic-Calculator'
  },
  {
    id: 8,
    image: WeatherApp,
    title: "Rock Paper Scissor",
    github: 'https://github.com/Ashtorments/Rock-Paper-Scissors-Game',
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 9,
    image: WeatherApp,
    title: "Password Generator",
    github: 'https://github.com/Ashtorments/Password-Generator-using-JS',
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
          <a href={github} className='btn' target='_blank'>Github</a>
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