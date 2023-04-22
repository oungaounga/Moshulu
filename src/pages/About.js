/** @format */

import {useEffect} from 'react'
import {Link} from 'react-router-dom'

function About(props) {
  // const nav = useNavigate()
  // useEffect(() => {
  //   window.addEventListener('beforeunload', (e) => {
  //     e.preventDefault()
  //     nav(0)
  //   })
  // }, [])
  return (
    <div className="p-5 w-screen h-[75vh] md:w-[45rem] backdrop-blur-[2px] rounded-sm">
      <div className="flex justify-end gap-1">
        <code className="hover:underline cursor-pointer">ANG</code>
        <p> / </p>
        <code className="hover:underline cursor-pointer">FR</code>
      </div>
      <div className="appear flex flex-col h-full justify-center">
        <br className="md:hidden" />
        <code className="text-lg md:text-2xl subpixel-antialiased text-justify">
          Hi, I'm Zouiche Omar, I studied mathematics at University de
          Montpellier. During my first year of masters, I discovered OOP and the
          concept of classes in a C++ class, from that point, all I wanted is to
          build, I got hooked. I made some{' '}
          <Link className="underline underline-offset-4 italic" to="/projects">
            stuff
          </Link>
          , and here's an{' '}
          <Link
            className="underline underline-offset-4 italic"
            to="/experience"
          >
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
      </div>
    </div>
  )
}

export default About
