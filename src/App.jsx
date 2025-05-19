import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
        <ToastContainer />
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
