import React from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Career from './components/Career'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

const App = () => {
  return (
    <div className='antialiased'>
      <TopNav />
      <div className='lg:grid lg:grid-cols-[minmax(340px,400px)_1fr]'>
        <Sidebar />
        <main className='mx-auto grid w-full max-w-4xl gap-20 px-4 py-12 sm:px-8 lg:px-12 lg:py-14'>
          <Career />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <p className='-mt-12 text-center text-xs text-slate-400'>© 2026 Kavya Chowdary Immanni</p>
        </main>
      </div>
    </div>
  )
}

export default App
