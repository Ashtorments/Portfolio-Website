import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    return (
        <div>
        <ErrorBoundary>
          <Header />
          <Navbar />
            <About />
            <Experience />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </ErrorBoundary>
        
      </div>
        
    )
}

export default App

