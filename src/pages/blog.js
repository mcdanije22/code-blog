import React from "react"
import "./styles/blog.scss"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PostList from "../components/PostList/PostList"
import Layout from "../components/layout"
import { Row, Col } from "antd"

const Blog = () => {
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
    <Layout>
      <Row justify="center">
        <Col xs={24} lg={12}>
          <div id="blogListContainer">
            <div id="blogPostHeader">
              <h1>Latest</h1>
              <h3>All of the latest post</h3>
              <hr />
            </div>
            <PostList blogPosts={blogPosts.allMarkdownRemark.edges} />
          </div>
        </Col>
      </Row>
    </Layout>
  )
}
export default Blog
