import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PostList from "../components/PostList/PostList"
import Layout from "../components/layout"

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
    <div>
      <Layout>
        <main>
          <PostList blogPosts={blogPosts.allMarkdownRemark.edges} />
        </main>
      </Layout>
    </div>
  )
}
export default Blog
