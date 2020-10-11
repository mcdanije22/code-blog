import React from "react"
import { Link } from "gatsby"
import "./Footer.scss"

const Footer = () => {
  return (
    <div id="footerContainer">
      <ul id="footerLinks">
        <li>
          <Link to="/">Tutorials</Link>
        </li>
        <li>
          <Link to="/">Tips & Tricks</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Sign Up/Account</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
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
