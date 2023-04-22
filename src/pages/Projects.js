/** @format */

function Projects(props) {
  return (
    <>
      <div className="p-5 w-screen md:w-[45rem] backdrop-blur-[2px] rounded-sm">
        <div className="appear">
          <div>
            <p>
              These are projects I've worked on, to build a skill set, learn
              concepts and design patternss, new technologies
            </p>
            <div className="flex flex-col mt-[2rem] divide-y-[1px] divide-neutral-600">
              <div className=" pb-[0.3rem]">
                <div className="flex justify-between">
                  <code className="flex flex-col">
                    <a
                      href={'https://instagram.com/erasmusmontpellier/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{textDeoration: 'none', color: 'white'}}
                      onClick={() =>
                        window.open(
                          'https://instagram.com/erasmusmontpellier/',
                          '_blank'
                        )
                      }
                    >
                      Erasmus Montpellier's website
                    </a>{' '}
                    <span className="text-[#475569]">23/03/2023 - current</span>
                  </code>
                </div>
                <div className="font-mono md:text-base flex flex-col gap-2 ml-[0.5rem] mr-[0.5rem] ">
                  <p className="text-justify">
                    <a>Erasmus Montpellier</a> is an association started by my
                    friend Quentin Fontana, aiming to help international
                    students on a year abroad in Montpellier. It needs a
                    platform to manage students and to develop a network. I'm
                    currently building the website, which presents the
                    association and its main activity, organizing events. Users
                    can create a profile and join events.
                  </p>
                  <p>
                    {' '}
                    <p className="inline font-semibold">Stack</p>: React,
                    Firebase, Tailwind, NextUI
                  </p>
                </div>
              </div>

              <div className="mt-[2rem] pb-[0.3rem]">
                <div className="flex justify-between">
                  <code className="flex flex-col">
                    <a
                      href={'https://instagram.com/erasmusmontpellier/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        window.open(
                          'https://oungaounga.github.io/tetris-vanille-project/',
                          '_blank'
                        )
                      }
                    >
                      Tetris Vanille
                    </a>{' '}
                    <span className="text-[#475569]">17/01/2023</span>
                  </code>
                </div>
                <div className="font-mono md:text-base flex flex-col">
                  <p className="ml-[0.5rem] mr-[0.5rem] text-justify">
                    A tetris game, partially built, using vanilla javascript and
                    the canvas API. I didn't want to use any high-order
                    libraries, only pure html and javascript. The 'physics' is a
                    matrice of coordinates on the game board, when a cube moves,
                    the coordinate matrice and the canvas are updated. I used
                    functionnal classes to organize the objects
                  </p>
                  <div className="ml-2 mt-2">
                    <p>
                      {' '}
                      <p className="inline font-semibold">Stack</p>: HTML, CSS,
                      Javascript
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
