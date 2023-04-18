/** @format */
import {CSSTransition} from 'react-transition-group'
import {useState, useRef} from 'react'

import {ReactComponent as ArrowIcon} from './svg/arrow.svg'
import {ReactComponent as AboutIcon} from './svg/about.svg'
import {ReactComponent as ExpIcon} from './svg/exp.svg'
import {ReactComponent as ProjectsIcon} from './svg/projects.svg'

import NavbarButton from './NavbarButton'
import NavbarItem from './NavbarItem'

function Navbar(props) {
  const [buttonStyle, setButtonStyle] = useState('navbar__button')
  let s =
    window.innerWidth <= 400
      ? {
          // transform: 'rotate(90deg)',
        }
      : {
          transform: `scale(${props.arrowScale})`,
        }
  let {openMenu, setOpenMenu, menuGoto, setMenuGoto} = props
  return (
    <div className={openMenu ? 'navbar navbar-open' : 'navbar'}>
      <NavbarButton
        onClick={() => {
          setOpenMenu(!openMenu)
          setMenuGoto(null)
        }}
        icon={<ArrowIcon />}
        className="navbar-arrow"
        style={s}
      />
      <CSSTransition
        in={openMenu}
        classNames="navbaritems"
        timeout={500}
        unmountOnExit
      >
        <div className="navbar__items_div">
          <NavbarButton
            icon={<AboutIcon />}
            // onClick={() => setMenuGoto('About')}
            className="navbar_button"
            style={{justifyContent: 'space-around'}}
            link="about"
          />
          <NavbarButton
            icon={<ProjectsIcon />}
            // onClick={() => setMenuGoto('Projects')}
            className="navbar_button"
            link="projects"
          />
          <NavbarButton
            icon={<ExpIcon />}
            // onClick={() => setMenuGoto('Experience')}
            className="navbar_button"
            link="experience"
          />
        </div>
      </CSSTransition>
    </div>
  )
}

export default Navbar
