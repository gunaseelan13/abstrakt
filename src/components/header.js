import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-dark bg-dark sticky-top">
    <span className="navbar-brand mb-0 h1">{siteTitle}</span>
  </nav>
)

export default Header
