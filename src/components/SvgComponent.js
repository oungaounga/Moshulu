/** @format */
import {useState, useEffect, useRef} from 'react'
// import data from './data'
import data from '../Components/data'

//STYLES :
const svgTextStyle = {
  fill: '#6b7280',
  // fontFamily: 'Lucida Sans Typewriter',
  // fontFamily: `'Roboto Mono', monospace`,
  // fontFamily: 'Verdana',
  // fontFamily: 'Courier',
  // fontFamily: "'VT323', monospace",
  // fontFamily: "'Nanum Gothic Coding', monospace",
  fontSize: '10px', //14px
  // filter: 'blur(0.5px)',
}
// ############################################# //

function SvgComponent(props) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    let timerId = setTimeout(() => {
      setFrame(frame + 1 === 60 ? 0 : frame + 1)
      // console.log('hello')
    }, 10)
  }, [frame])

  let aFrame = data['charHolder'][frame].map((line, index) => (
    <text
      xmlns="http://www.w3.org/2000/svg"
      style={svgTextStyle}
      x="20"
      y={index * 6.5}
      key={index}
    >
      {line}
    </text>
  ))
  return (
    <svg
      className="svg blur-[0.3px]"
      width={1500 / 1.75} //902/1.75
      height={850 / 1.75} //475/1.75
      // viewBox="130 -25 902 475"
      // viewBox={`${props.vboxX} 0 902 475`}
      viewBox={`0 0 902 475`}
    >
      {aFrame}
    </svg>
  )
}

export default SvgComponent
