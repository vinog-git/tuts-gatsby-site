import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"


const Header = ({ siteTitle }) => (
  <header
  className="container-fluid">
    <div className="row">
    <h1 className="col-9 col-md-3">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Navbar></Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
