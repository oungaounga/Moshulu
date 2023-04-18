/** @format */

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="bg-slate-900 w-screen h-full sm:w-[40rem] p-7 mb-8 mt-8 flex items-baseline gap-3 text-l  ">
        <div className="flex-2 text-3xl  ">
          <Link to="/">Home</Link>
        </div>
        <div className="flex-1 flex justify-end gap-3 md:gap-7">
          <Link to="about" className="flex-2">
            About
          </Link>
          <Link to="projects" className="flex-2">
            Projects
          </Link>
          <Link to="experience" className="flex-2">
            Experience
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
