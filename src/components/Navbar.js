/** @format */

import {Link, useNavigate} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import useMediaQuery from '../useMediaQuery'

import {ReactComponent as ArrowIcon} from './svg/arrow.svg'
import {ReactComponent as AboutIcon} from './svg/about.svg'
import {ReactComponent as ExpIcon} from './svg/exp.svg'
import {ReactComponent as ProjectsIcon} from './svg/projects.svg'

function Navbar(props) {
  // const navigate = useNavigate()
  let openMenu = props.openMenu
  let setOpenMenu = props.setOpenMenu
  let {lang} = props.lang
  const {setLang} = props.lang
  console.log('navbar lang', lang)
  const isNotPhone = useMediaQuery('(min-width: 768px)')

  // const handleBeforeUnload = () => {
  //   console.log('here')
  //   navigate('/Moshulu')
  //   window.location.pathname = '/Moshulu'
  // }

  // window.BeforeUnloadEvent = handleBeforeUnload

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault()
  //   console.log('from event listener', window.location.pathname)
  //   window.location.pathname = '/Moshulu'
  // })

  return (
    <div className="flex flex-col sm:flex-row lg:ml-[10rem] justify-start w-full mt-5 sm:mt-10 md:w-[45rem] lg:w-[50rem]">
      <div
        className="hidden md:block mr-14 w-[5rem] md:w-[6rem] pt-3"
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        <Link to="/">
          <ArrowIcon />
        </Link>
      </div>

      <div
        id="phone_nav"
        className="mb-5 md:hidden text-center flex flex-col justify-center gap-3"
      >
        <div className="flex w-[95vw] lg:w-[35rem] justify-end">
          <code
            className="hover:underline cursor-pointer ml-[0.2rem] mr-[0.2rem]"
            onClick={() => {
              setLang(true)
              console.log(lang)
            }}
          >
            ANG
          </code>
          <code> / </code>
          <code
            className="hover:underline cursor-pointer ml-[0.2rem] mr-[0.2rem]"
            onClick={() => {
              setLang(false)
              console.log(lang)
            }}
          >
            FR
          </code>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full lg:w-[35rem] justify-center">
            <div className=" relative w-[6.5rem] sm:w-[8rem] md:w-[9.5rem] flex self-center">
              <Link className="absolute w-full h-full" to="/about"></Link>
              <AboutIcon />
            </div>
            <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex  justify-self-center">
              <Link className="absolute w-full h-full" to="/projects"></Link>
              <ProjectsIcon />
            </div>
            <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex justify-self-center">
              <Link className="absolute w-full h-full" to="/experience"></Link>
              <ExpIcon />
            </div>
          </div>
        </div>
      </div>
      {isNotPhone ? (
        <CSSTransition
          in={openMenu}
          classNames="navbaritems"
          // className={isNotPhone ? 'hidden' : ''}
          timeout={500}
          unmountOnExit
        >
          <div className="flex flex-col">
            <div className="flex w-[32rem] text-xl justify-end">
              <code
                className="hover:underline cursor-pointer ml-[0.2rem] mr-[0.2rem]"
                onClick={() => {
                  setLang(true)
                  console.log(lang)
                }}
              >
                ANG
              </code>
              <code> / </code>
              <code
                className="hover:underline cursor-pointer ml-[0.2rem] mr-[0.2rem]"
                onClick={() => {
                  setLang(false)
                  console.log(lang)
                }}
              >
                FR
              </code>
            </div>
            <div className="flex w-full lg:w-[35rem] justify-center">
              <div className=" relative w-[6.5rem] sm:w-[8rem] md:w-[9.5rem] flex self-center">
                <Link className="absolute w-full h-full" to="/about"></Link>
                <AboutIcon />
              </div>
              <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex  justify-self-center">
                <Link className="absolute w-full h-full" to="/projects"></Link>
                <ProjectsIcon />
              </div>
              <div className="relative w-[7rem] sm:w-[8.5rem] md:w-[10rem] flex justify-self-center">
                <Link
                  className="absolute w-full h-full"
                  to="/experience"
                ></Link>
                <ExpIcon />
              </div>
            </div>
          </div>
        </CSSTransition>
      ) : null}
    </div>
  )
}

export default Navbar
