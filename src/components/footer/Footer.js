import React from "react"
import { Link } from "gatsby"
import "./Footer.scss"

const Footer = () => {
  return (
    <div id="footerContainer">
      <ul id="footerLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Posts</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
      <p className="copyRight">
        © {new Date().getFullYear()} <Link to="/">Josh McDaniel.</Link> All
        Rights Reserved{" "}
      </p>
    </div>
  )
}
export default Footer
