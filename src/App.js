/** @format */

import {useState, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import useMediaQuery from './useMediaQuery'

//-----------------components--------------------//
import Navbar from './components/Navbar'
//---------------------pages--------------------//
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import HomePage from './pages/HomePage'
//---------------------------------------------//

import './Global.css'

function App() {
  const isPhone = useMediaQuery('(max-width: 400px)')
  const [openMenu, setOpenMenu] = useState(isPhone ? true : false)

  // window.performance.navigation.type === 1
  //   ? (window.location.pathname = '/')
  //   : console.log('nothing')
  return (
    <div className="w-screen min-h-screen bodyzer overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              !isPhone ? <HomePage /> : <Navigate replace to={'about'} />
            }
          />
          <Route exact path="about" element={<About />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="experience" element={<Experience />} />
        </Routes>
        <p className="text-lg text-center mt-3">
          changes from 09:51 19/04/2023
        </p>
      </div>
    </div>
  )
}

export default App
