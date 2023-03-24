import React from 'react'
import './Projects.css'
import WeatherApp from '../../assets/WeatherApp.jpg'
import LoginAuth from '../../assets/LoginAuth.jpg'
import PDFMerger from '../../assets/PDFMerger.jpg'
import Passwordgen from '../../assets/Passwordgen.jpg'
import Calculator from '../../assets/Calculator.jpg'
import RPS from '../../assets/RPS.jpg'
import CodingContests from '../../assets/CodingContests.jpg'
import Todo from '../../assets/Todo.jpg'
import om from '../../assets/om.jpg'
import RedSoil from '../../assets/RedSoil.jpg'

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
    image: PDFMerger,
    title: "PDF Merger Tool",
    github: 'https://github.com/Ashtorments/PDF-Merger-Tool',
    demo: ''
  },
  {
    id: 4,
    image: LoginAuth,
    title: "Login Auth-Angular-Dotnet",
    github: 'https://github.com/Ashtorments/LoginAuth-Angular-dotnet',
    demo: 'https://ashtorments.github.io/LoginUI/login'
  },
  {
    id: 5,
    image: Todo,
    title: "Todo-List",
    github: 'https://github.com/Ashtorments/todo_list',
    demo: 'https://ashtorments.github.io/todo_list/'
  },
  {
    id: 6,
    image: CodingContests,
    title: "Coding Contest",
    github: 'https://github.com/Ashtorments/Coding-Contests-BootStrap-',
    demo: 'https://github.com/Ashtorments/Coding-Contests-BootStrap-'
  },
  {
    id: 7,
    image: Calculator,
    title: "Calculator",
    github: 'https://github.com/Ashtorments/Basic-Calculator',
    demo: 'https://ashtorments.github.io/Basic-Calculator/'
  },
  {
    id: 8,
    image: RPS,
    title: "Rock Paper Scissor",
    github: 'https://github.com/Ashtorments/Rock-Paper-Scissors-Game',
    demo: 'https://ashtorments.github.io/Rock-Paper-Scissors-Game/'
  },
  {
    id: 9,
    image: Passwordgen,
    title: "Password Generator",
    github: 'https://github.com/Ashtorments/Password-Generator-using-JS',
    demo: 'https://ashtorments.github.io/Password-Generator-using-JS/'
  }
]

const data1 = [
  {
    id: 1,
    image: RedSoil,
    title: "RedSoil",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia natus voluptates, maxime impedit aspernatur similique maiores molestias ullam provident. Blanditiis saepe veniam inventore sint similique error, consequuntur optio illum!",
    demo: 'https://redsoil.in/'
  },
  {
    id: 2,
    image: WeatherApp,
    title: "DTS",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia natus voluptates, maxime impedit aspernatur similique maiores molestias ullam provident. Blanditiis saepe veniam inventore sint similique error, consequuntur optio illum!",
    demo: 'https://ashtorments.github.io/Weather-App/'
  },
  {
    id: 3,
    image: om,
    title: "Ompoojapath",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia natus voluptates, maxime impedit aspernatur similique maiores molestias ullam provident. Blanditiis saepe veniam inventore sint similique error, consequuntur optio illum!",
    demo: 'https://ompoojapath.com/'
  },
]

const Projects = () => {
  return (
    <section id='Projects'>
      <h5>My Recent Personal Projects</h5>
      <h2>Projects</h2>
      <div class="warpper">
        <input class="radio" id="one" name="group" type="radio" checked />
        <input class="radio" id="two" name="group" type="radio" />

        <div class="tabs">
          <label class="tab" id="one-tab" for="one">Personal Projects</label>
          <label class="tab" id="two-tab" for="two">Professional Projects</label>
        </div>
        <div class="panels">
          <div class="panel" id="one-panel">
            <div className="container projects_container">
              {
                data.map(({ id, image, title, github, demo }) => {
                  return (
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
          </div>
          <div class="panel" id="two-panel">
          <div className="container projects_container">
              {
                data1.map(({ id, image, title, Desc, demo }) => {
                  return (
                    <article key={id} className='projects_item'>
                      <div className="projects_item-image">
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <h5>{Desc}</h5>
                      <div className="projects_item-cta">
                        
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects