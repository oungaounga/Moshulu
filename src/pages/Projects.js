/** @format */

function Projects(props) {
  return (
    <>
      <div className="p-5 w-screen md:w-[45rem] backdrop-blur-[2px] rounded-sm">
        <div className="appear">
          <div className="list-element">
            <div
              style={{display: 'flex', justifyContent: 'space-between'}}
              // className="list-element-header"
            >
              <p style={{margin: 0}}>Consequat quis est</p>
              <span style={{margin: 0, color: '#475569'}}>23/03/2023</span>
            </div>
            <p className="list-element-body">
              Et eiusmod cillum incididunt nostrud Lorem dolore reprehenderit
              minim elit culpa mollit commodo consequat. Id consectetur elit ad
              irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
              cupidatat esse dolore officia velit reprehenderit id.
            </p>
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
              minim elit culpa mollit commodo consequat. Id consectetur elit ad
              irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
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
              A small tetris game to learn essentially javascript code processes
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
              minim elit culpa mollit commodo consequat. Id consectetur elit ad
              irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
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
              minim elit culpa mollit commodo consequat. Id consectetur elit ad
              irure commodo. Duis mollit culpa mollit sunt esse sunt culpa
              cupidatat esse dolore officia velit reprehenderit id.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
