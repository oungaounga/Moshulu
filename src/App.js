/** @format */

import {Fragment, useRef, useState, useEffect} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Navbar from './Components/Navbar'
import SvgComponent from './Components/SvgComponent'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import './Global.css'

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [menuGoto, setMenuGoto] = useState(null)
  const [vboxX, setVboxX] = useState(
    130 - (window.innerWidth / window.innerHeight) * 90
  )
  const [arrowScale, setArrowScale] = useState(window.innerWidth / 750)
  const [svgScale, setSvgScale] = useState(window.innerWidth / -43)

  window.addEventListener('resize', () => {
    setArrowScale(window.innerWidth / 750)
    // setArrowScale(window.innerWidth / 1750)
    setSvgScale(window.innerWidth / -43)
    setVboxX(130 - (window.innerWidth / window.innerHeight) * 90)
    console.log(window.innerWidth / window.innerHeight)
  })
  return (
    <div className="main">
      <div className="container">
        <Navbar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menuGoto={menuGoto}
          setMenuGoto={setMenuGoto}
          arrowScale={arrowScale}
        />
        <SvgComponent toggle={openMenu} svgScale={svgScale} vboxX={vboxX} />
        <div className="container-article">
          {menuGoto === 'About' && <About />}
          {menuGoto === 'Projects' && <Projects />}
          {menuGoto === 'Experience' && <Experience />}
        </div>
      </div>
    </div>
  )
}

export default App
