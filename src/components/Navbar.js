/** @format */

import {Link, useNavigate} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import useMediaQuery from '../useMediaQuery'

import {ReactComponent as ArrowIcon} from './svg/arrow.svg'
import {ReactComponent as AboutIcon} from './svg/about.svg'
import {ReactComponent as ExpIcon} from './svg/exp.svg'
import {ReactComponent as ProjectsIcon} from './svg/projects.svg'

function Navbar(props) {
  const navigate = useNavigate()
  let openMenu = props.openMenu
  let setOpenMenu = props.setOpenMenu
  const isNotPhone = useMediaQuery('(min-width: 640px)')

  return (
    <div className="flex flex-col sm:flex-row lg:ml-[10rem] justify-start w-full mt-5 sm:mt-10 md:w-[45rem] lg:w-[50rem]">
      <div
        className="hidden md:block mr-14 w-[5rem] md:w-[6rem] pt-3"
        onClick={() => {
          setOpenMenu(!openMenu)
          navigate(
            window.location == 'http://localhost:3000/Moshulu/about' ||
              'http://localhost:3000/Moshulu/projects' ||
              'http://localhost:3000/Moshulu/experience'
              ? '/Moshulu'
              : '/about'
          )
        }}
      >
        {/* <Link to="/"> */}
        <ArrowIcon />
        {/* </Link> */}
      </div>

      <div className="mb-5 md:hidden text-center flex flex-col justify-center gap-3">
        {/* <div className="flex justify-center gap-5">
          <div className="relative">
            <Link className="absolute w-full h-full" to="/"></Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </div> */}
        <div className="flex">
          <div className="flex w-full lg:w-[35rem] justify-center">
            <div className=" relative w-[6.5rem] sm:w-[8rem] md:w-[9.5rem] flex self-center">
              <Link
                className="absolute w-full h-full"
                to="Moshulu/about"
              ></Link>
              <AboutIcon />
            </div>
            <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex  justify-self-center">
              <Link
                className="absolute w-full h-full"
                to="Moshulu/projects"
              ></Link>
              <ProjectsIcon />
            </div>
            <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex justify-self-center">
              <Link
                className="absolute w-full h-full"
                to="Moshulu/experience"
              ></Link>
              <ExpIcon />
            </div>
          </div>
        </div>
      </div>
      <CSSTransition
        in={openMenu}
        classNames="navbaritems"
        timeout={500}
        unmountOnExit
      >
        <div className="flex w-full lg:w-[35rem] justify-center">
          <div className=" relative w-[6.5rem] sm:w-[8rem] md:w-[9.5rem] flex self-center">
            <Link className="absolute w-full h-full" to="Moshulu/about"></Link>
            <AboutIcon />
          </div>
          <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex  justify-self-center">
            <Link
              className="absolute w-full h-full"
              to="Moshulu/projects"
            ></Link>
            <ProjectsIcon />
          </div>
          <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex justify-self-center">
            <Link
              className="absolute w-full h-full"
              to="Moshulu/experience"
            ></Link>
            <ExpIcon />
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Navbar
