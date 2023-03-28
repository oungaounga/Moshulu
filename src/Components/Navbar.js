/** @format */
import {CSSTransition} from 'react-transition-group'
import {useState, useRef} from 'react'
// import {ReactComponent as Iconzer} from './svg/iconzer.svg'
// import {ReactComponent as HelloIcon} from './svg/helloIcon.svg'
// import {ReactComponent as AboutIcon} from './svg/aboutIcon.svg'
// import {ReactComponent as ExperienceIcon} from './svg/experiencesIcon.svg'
// import {ReactComponent as ProjectsIcon} from './svg/projectsIcon.svg'

import {ReactComponent as ArrowIcon} from './svg/arrow.svg'
import {ReactComponent as AboutIcon} from './svg/about.svg'
import {ReactComponent as ExpIcon} from './svg/exp.svg'
import {ReactComponent as ProjectsIcon} from './svg/projects.svg'

import NavbarButton from './NavbarButton'
import NavbarItem from './NavbarItem'

function Navbar(props) {
  //   const [openMenu, setOpenMenu] = useState(false)
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
          // setMenuGoto(menuGoto === null ? 'About' : null)
          setMenuGoto(null)
        }}
        icon={<ArrowIcon />}
        className="navbar-arrow"
        // style={{
        //   transform: `${
        //     w <= 400
        //       ? 'scale(${props.arrowScale / 1000}), rotate(90deg)'
        //       : 'scale(${props.arrowScale})'
        //   }`,
        // }}
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
            onClick={() => setMenuGoto('About')}
            className="navbar_button"
            style={{justifyContent: 'space-around'}}
          />
          <NavbarButton
            icon={<ProjectsIcon />}
            onClick={() => setMenuGoto('Projects')}
            className="navbar_button"
          />
          <NavbarButton
            icon={<ExpIcon />}
            onClick={() => setMenuGoto('Experience')}
            className="navbar_button"
          />
        </div>
      </CSSTransition>
    </div>
  )
}

export default Navbar
