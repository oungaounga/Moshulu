/** @format */

import {Link} from 'react-router-dom'

const AboutAng = () => {
  return (
    <>
      <code className="text-lg md:text-2xl subpixel-antialiased text-justify">
        Hi, I'm Zouiche Omar, I studied mathematics at University de
        Montpellier. During my first year of masters, I discovered OOP and the
        concept of classes in a C++ class, from that point, all I wanted is to
        build, I got hooked. I made some{' '}
        <Link className="underline underline-offset-4 italic" to="/projects">
          stuff
        </Link>
        , and here's an{' '}
        <Link className="underline underline-offset-4 italic" to="/experience">
          outline
        </Link>{' '}
        of my experiences in the academic and the professional world
      </code>
      <br />
      <code className="text-lg md:text-2xl subpixel-antialiased text-justify">
        Currently working on Erasmus Montpellier's{' '}
        <a
          href="https://fire-test-3c6f5.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="italic underline underline-offset-4"
        >
          website
        </a>
        , an association helping international students on a year abroad in
        Montepllier.
      </code>
    </>
  )
}
const AboutFr = () => {
  return (
    <>
      <code className="text-lg md:text-2xl subpixel-antialiased text-justify">
        Bonjour, Je m'appelle Zouiche Omar, j'ai étudié les mathématiques à la
        Faculté des Sciences de Montpellier. Ma première année de Master, j'ai
        découvert la programmation oriontée object et les classes pendant un
        cours de C++, et depuis j'ai un fort intérêt pour le code. Voici
        quelques{' '}
        <Link className="underline underline-offset-4 italic" to="/projects">
          projets
        </Link>{' '}
        personnels sur lesquels j'ai travaillé, et voici mon{' '}
        <Link className="underline underline-offset-4 italic" to="/experience">
          parcours
        </Link>{' '}
        d'étudiant
      </code>
      <br />
      <code className="text-lg md:text-2xl subpixel-antialiased text-justify">
        Je travaille actuellement sur le{' '}
        <a
          href="https://fire-test-3c6f5.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="italic underline underline-offset-4"
        >
          site web
        </a>
        d'Erasmus Montpellier, une association visant à aider les étudiants
        étrangers.
      </code>
    </>
  )
}

function About(props) {
  // const nav = useNavigate()
  // useEffect(() => {
  //   window.addEventListener('beforeunload', (e) => {
  //     e.preventDefault()
  //     nav(0)
  //   })
  // }, [])
  console.log(<aboutAng />)
  return (
    <div className="p-5 w-screen h-[75vh] md:w-[45rem] backdrop-blur-[2px] rounded-sm">
      <div className="appear flex flex-col h-full justify-center">
        <br className="md:hidden" />
        {props.lang ? <AboutAng /> : <AboutFr />}
      </div>
    </div>
  )
}

export default About
