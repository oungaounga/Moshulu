/** @format */

import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Components/NavbarN'
//--------------pages--------------///
import Home from './Components/HomeN'
import About from './Components/AboutN'
import Experience from './Components/ExperienceN'
import Projects from './Components/ProjectsN'
//--------------------------------//

import './Global.css'
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-screen min-h-screen bodyzer">
          <div className="relative flex flex-col items-center justify-center">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
