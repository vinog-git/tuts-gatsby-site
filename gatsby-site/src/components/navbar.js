import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav className="col-3 col-md-9 navbar navbar-default navbar-expand-lg p-0">
        <div className="navbar-header d-flex">
          <button
            type="button"
            data-target="#navbarCollapse"
            data-toggle="collapse"
            className="navbar-toggle navbar-toggler ml-auto text-white"
          >
            <i className="fas fa-bars" /> <span className="navbar-label">Menu</span>
          </button>
        </div>

        <div
          id="navbarCollapse"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="/tags">Tags</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
