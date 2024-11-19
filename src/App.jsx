import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import './index.css'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
      <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center'>
      </div>

      <div className='relative z-10'>
        <Navbar />
        <Profile />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
      )
}

export default App