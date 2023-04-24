/** @format */

import img from './img1.jpg'
// const description = (
//   <p className="text-justify">
//     <a
//       href="https://instagram.com/erasmusmontpellier"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hover:underline"
//     >
//       Erasmus Montpellier
//     </a>{' '}
//     is an association started by my friend Quentin Fontana, aiming to help
//     international students on a year abroad in Montpellier. It needs a platform
//     to manage students and to develop a network. I'm currently building the
//     website, which presents the association and its main activity, organizing
//     events. Users can create a profile and join events.
//   </p>
// )

const projectsAng = [
  [
    'Erasmus website',
    'current',
    <p className="text-justify">
      <a
        href="https://instagram.com/erasmusmontpellier"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Erasmus Montpellier
      </a>{' '}
      is an association started by my friend Quentin Fontana, aiming to help
      international students on a year abroad in Montpellier. It needs a
      platform to manage students and to develop a network. I'm currently
      building the website, which presents the association and its main
      activity, organizing events. Users can create a profile and join events.
    </p>,
    'React, Firebase, Tailwind, NextUI',
    'https://fire-test-3c6f5.web.app/',
    'https://github.com/oungaounga/firebase-test',
  ],
  [
    'Tetris Vanille',
    '17/01/2023',
    <p className="ml-[0.5rem] mr-[0.5rem] text-justify">
      A tetris game, partially built, using vanilla javascript and the canvas
      API. I didn't want to use any high-order libraries, only pure html and
      javascript. The 'physics' is a matrice of coordinates on the game board,
      when a cube moves, the coordinate matrice and the canvas are updated. I
      used functionnal classes to organize the objects
    </p>,
    'HTML, CSS, Javascript',
    'https://oungaounga.github.io/tetris-vanille-project/',
    'https://github.com/oungaounga/tetris-vanille-project',
  ],
  [
    'Optimisation class project website',
    '2021',
    <p className="ml-[0.5rem] mr-[0.5rem] text-justify">
      First website I have built. The class assignement was to build and deploy
      a website so that the teacher can visit and download homeworks. The
      homeworks is the interesting parts, many projects to use optimisation
      concepts in study cases using Python
    </p>,
    'Python, HTML, CSS',
    'https://oungaounga.github.io/project21808112.github.io/',
    'https://github.com/oungaounga/project21808112.github.io',
  ],
]

const projectsFr = [
  ['titre', 'date', 'description', 'stack techs'],
  ['titre', 'date', 'description', 'stack techs'],
  ['titre', 'date', 'description', 'stack techs'],
]

//<MakeProjectItem list = {lang ? projectsAng : projectsFr}
const MakeProjectItem = (props) => {
  const item = props.item
  console.log('item[5]', item[4])
  return (
    <>
      <div className=" pb-[0.3rem]">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="flex flex-col text-lg">
              <a href={item[4]} target="_blank" rel="noopener noreferrer">
                {item[0]}
              </a>{' '}
            </p>
            <div>
              <a href={item[5]} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  className="bi bi-github inline m-1 fill-slate-400 hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href={item[4]} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  // fill="currentColor"
                  className=" bi bi-arrow-up-right inline m-1 fill-slate-400  hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <span className="text-sm text-neutral-500">{item[1]}</span>
        </div>
        <div className="md:text-base flex flex-col gap-2 ml-[0.5rem] mr-[0.5rem] ">
          {item[2]}
          <p>{item[3]}</p>
        </div>
      </div>
    </>
  )
}

function Projects(props) {
  let projects = props.lang ? projectsAng : projectsFr
  return (
    <>
      <div className="p-5 w-screen md:w-[45rem] backdrop-blur-[2px] rounded-sm">
        <div className="appear">
          {' '}
          <div>
            {/* <p>
              These are projects I've worked on, to build a skill set, learn
              concepts, design patterns and new technologies.
            </p> */}

            <div className="flex flex-col mt-[2rem] gap-6 divide-y-[1px] divide-neutral-600">
              {projects.map((item) => {
                return (
                  <>
                    <MakeProjectItem item={item} />
                  </>
                )
              })}
              <div className="mt-6 border-none flex flex-col justify-center p-3">
                <div className="w-full flex justify-center transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300">
                  <img
                    src={img}
                    alt="img"
                    className=" w-4/5 h-4/5 rounded-xl"
                  />
                </div>

                <p className="text-sm text-center text-slate-600">
                  {' '}
                  visualize value ©
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
