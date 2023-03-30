import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import Education from './components/Education/education';
import ErrorBoundary from './ErrorBoundary';


const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Navbar />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ErrorBoundary>

    </div>

  )
}

export default App

