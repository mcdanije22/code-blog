import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import MobileNav from "../components/navBar/MobileNav"
import { Button, Input, Row, Col } from "antd"
import "./styles/index.scss"
import PostList from "../components/PostList/PostList"
import Footer from "../components/footer/Footer"

const { Search } = Input

const IndexPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              date
              slug
              subtitle
              title
            }
            html
            id
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div id="landingPageContainer">
      <div id="landingHeader">
        <nav>
          <MobileNav />
        </nav>
        <div id="headerHero">
          <h1>Title</h1>
          <h3>Welcome to the #1 place for</h3>
          <h3>Everything you need to become a better web developer </h3>
          <Button type="primary" id="heroButton">
            Go Pro
          </Button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2fbfd"
            d="M0,96L40,117.3C80,139,160,181,240,202.7C320,224,400,224,480,208C560,192,640,160,720,133.3C800,107,880,85,960,85.3C1040,85,1120,107,1200,138.7C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <main>
        <Row justify="center" gutter={[32, 0]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div id="projectsContainer" className="container">
              <h1>Projects to Work on</h1>
              <ul id="projectList">
                {/* <img src="https://via.placeholder.com/450x250" /> */}
                <img
                  src="https://via.placeholder.com/150"
                  className="projectImage"
                />
              </ul>
            </div>
            <div id="blogContainer" className="container">
              <h1>Recently Posted</h1>
              <PostList blogPosts={blogPosts.allMarkdownRemark.edges} />
              <Link to="/">
                <h4 id="viewAllOption">View all</h4>
              </Link>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <p className="container">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document
            </p>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 20 }}>
            <div id="newsletterSection" className="container">
              <h1>Get Notified</h1>
              <p>Join the Newsletter for Exclusive content </p>
              <Search
                placeholder="Enter Email Address"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
          </Col>
        </Row>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
