/** @format */

function NavbarButton(props) {
  return (
    <div
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.icon}
    </div>
  )
}

export default NavbarButton
