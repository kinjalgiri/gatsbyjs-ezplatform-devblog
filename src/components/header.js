import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { 
  faHome,
  faUser,
  faBookmark, 
} from "@fortawesome/free-solid-svg-icons";

import { 
  faGithub,
  faFacebook,
  faTwitter, 
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ siteTitle }) => (
  <header className="header text-center">
    <h1 className="blog-name pt-lg-4 mb-0">
    <Link to="/" style={{ color: `white`, textDecoration: `none` }} >
      {siteTitle}
    </Link>
    </h1>
    <nav className="navbar navbar-expand-lg navbar-dark" >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navigation" className="collapse navbar-collapse flex-column" >
        <div className="profile-section pt-3 pt-lg-0">
          
            <div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br/>
              <a href="about.html">Find out more about me</a>
            </div>
          <ul className="social-list list-inline py-3 mx-auto">
                <li className="list-inline-item">
                  <a href="/#">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
              <hr/>
        </div>
        <ul className="navbar-nav flex-column text-left">
          <li className="nav-item active">
            <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faHome} className="mr-2" />Blog Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog-post.html">
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />Blog Post</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              <FontAwesomeIcon icon={faUser} className="mr-2" />About Me</a>
          </li>
        </ul>
        <div className="my-2 my-md-3">
          <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer" >Get in Touch</a>
        </div>
      </div>
    </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
