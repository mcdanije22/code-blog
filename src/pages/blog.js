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
        <div id="blogListContainer">
          <Col xs={24} lg={8}>
            <PostList blogPosts={blogPosts.allMarkdownRemark.edges} />
          </Col>
        </div>
        <Col xs={{ span: 0 }} lg={{ span: 4 }}>
          t
        </Col>
      </Row>
    </Layout>
  )
}
export default Blog
