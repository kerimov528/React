import React from 'react'
import PropTypes from "prop-types"

function Navbar(props) {
  return (
    <div>
      <h1 className='text-center'>{props.title}</h1>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Anar"
}

export default Navbar;



