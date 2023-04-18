/** @format */
import {Link} from 'react-router-dom'

function NavbarButton(props) {
  return (
    <div
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      <Link to={props.link}>{props.icon}</Link>
    </div>
  )
}

export default NavbarButton
