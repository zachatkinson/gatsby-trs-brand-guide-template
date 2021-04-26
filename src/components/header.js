import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../svg/logo.inline.svg"

const Header = ({ siteTitle }) => (
  <header className={`site-header`}>

      <div
          style={{
              paddingTop: `1rem`,
              textAlign: `center`,

          }}
      >
          <Link
              to="/"
              style={{
                  color: `white`,
                  textDecoration: `none`,
              }}
          >
              <Logo />
              <h4><strong>{siteTitle}</strong></h4>
          </Link>

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
