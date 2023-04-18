/** @format */

import {useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
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
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen bodyzer overflow-x-hidden">
        <div className="relative flex flex-col items-center justify-center">
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Routes>
            <Route
              exact
              path="/Moshulu"
              element={
                !isPhone ? <HomePage /> : <Navigate replace to={'about'} />
              }
            />
            <Route exact path="/Moshulu/about" element={<About />} />
            <Route exact path="/Moshulu/projects" element={<Projects />} />
            <Route exact path="/Moshulu/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
