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
            <div className="m-[0.5rem] pt-[0.3rem] pb-[0.3rem]">
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
              <div className="font-mono text-sm flex flex-col">
                <p className="font-mono mt-[0.8rem] ml-[0.5rem] mr-[0.5rem] text-sm text-justify">
                  <a>Erasmus Montpellier</a> is an association started by my
                  friend Quentin Fontana, aiming to help international students
                  on a year abroad in Montpellier. It needs a platform to manage
                  students and to develop a network. I'm currently building the
                  website, which presents the association and its main activity,
                  organizing events. Users can create a profile and join events.
                </p>
                <div className="ml-4 mt-2">
                  <p>
                    {' '}
                    <p className="inline font-semibold">Stack</p>: React,
                    Firebase, Tailwind, NextUI
                  </p>
                  {/* <ul className="ml-2">
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Tailwind</li>
                    <li>NextUI</li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="list-element list-line-separator">
              <div
                style={{display: 'flex', justifyContent: 'space-between'}}
                // className="list-element-header"
              >
                <p style={{margin: 0}} className="list-element-hearder-title">
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
                    Erasmus
                  </a>{' '}
                  website
                </p>
                <span
                  style={{margin: 0, color: '#475569'}}
                  className="list-element-header-date"
                >
                  23/03/2023
                </span>
              </div>
              <p
                style={{
                  marginBottom: 0,
                  marginTop: '0.8rem',
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                  color: '#cbd5e1',
                }}
              >
                Et eiusmod cillum incididunt nostrud Lorem dolore reprehenderit
                minim elit culpa mollit commodo consequat. Id consectetur elit
                ad irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
                cupidatat esse dolore officia velit reprehenderit id.
              </p>
            </div>
            <div className="list-element list-line-separator">
              <div
                style={{display: 'flex', justifyContent: 'space-between'}}
                // className="list-element-header"
              >
                <a
                  href={'https://oungaounga.github.io/tetris-vanille-project/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDeoration: 'none', color: 'white', margin: 0}}
                >
                  Tetris Vanille
                </a>
                <span style={{margin: 0, color: '#475569'}}>17/01/2023</span>
              </div>
              <p className="list-element-body">
                A small tetris game to learn essentially javascript code
                processes
              </p>
            </div>
            <div className="list-element list-line-separator">
              <div
                style={{display: 'flex', justifyContent: 'space-between'}}
                // className="list-element-header"
              >
                <p style={{margin: 0}}>Consequat quis est</p>
                <span style={{margin: 0, color: '#475569'}}>23/03/2023</span>
              </div>
              <p className="list-element-body">
                Et eiusmod cillum incididunt nostrud Lorem dolore reprehenderit
                minim elit culpa mollit commodo consequat. Id consectetur elit
                ad irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
                cupidatat esse dolore officia velit reprehenderit id.
              </p>
            </div>
            <div className="list-element list-line-separator">
              <div
                style={{display: 'flex', justifyContent: 'space-between'}}
                // className="list-element-header"
              >
                <p style={{margin: 0}}>Consequat quis est</p>
                <span style={{margin: 0, color: '#475569'}}>23/03/2023</span>
              </div>
              <p className="list-element-body">
                Et eiusmod cillum incididunt nostrud Lorem dolore reprehenderit
                minim elit culpa mollit commodo consequat. Id consectetur elit
                ad irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
                cupidatat esse dolore officia velit reprehenderit id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
