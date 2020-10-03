import React, { useState } from "react"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { Link } from "gatsby"
import "./MobileNav.scss"

const MobileNav = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <div id="mobileNavContainer">
      <ul id="mobileNav">
        <li>Code Along</li>
        <li>
          <Button
            type="ghost"
            onClick={() => {
              showDrawer()
            }}
            style={{ border: "none", fontSize: "1.2rem" }}
          >
            <MenuOutlined />
          </Button>
        </li>
      </ul>
      <Drawer
        placement="top"
        closable={false}
        onClose={onClose}
        visible={visible}
        height="100%"
        key="right"
      >
        <div id="drawerMenuContent">
          <ul id="drawerTopMenu">
            <li>
              <Link to="/">Code Along</Link>
            </li>
            <li>
              <CloseOutlined
                style={{ fontSize: "1.5rem", color: "black" }}
                onClick={() => {
                  onClose()
                }}
              />
            </li>
          </ul>
          <ul id="drawerVerticalMenu">
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
        </div>
      </Drawer>
    </div>
  )
}
export default MobileNav
