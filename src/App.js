/** @format */

import {useState, useEffect} from 'react'
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import useMediaQuery from './useMediaQuery'

//-----------------components--------------------//
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//---------------------pages--------------------//
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import HomePage from './pages/HomePage'
import Article from './pages/Article'
//---------------------------------------------//

import './Global.css'

function App() {
  const isPhone = useMediaQuery('(max-width: 400px)')
  let location = useLocation()
  const [openMenu, setOpenMenu] = useState(
    isPhone || location.pathname !== '/' ? true : false
  )
  const [lang, setLang] = useState(true) //true is for eng
  return (
    <>
      <div className="w-screen min-h-screen bodyzer overflow-x-hidden">
        <div className="relative flex flex-col items-center justify-center">
          <Navbar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            lang={{lang, setLang}}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                !isPhone ? <HomePage /> : <Navigate replace to={'about'} />
              }
            />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/projects" element={<Projects lang={lang} />} />
            <Route path="/experience" element={<Experience lang={lang} />} />
            <Route path="/projects/whyEM" element={<Article lang={lang} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
