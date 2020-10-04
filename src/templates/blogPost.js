import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blogPost.scss"
import { Link } from "gatsby"
import { LeftOutlined } from "@ant-design/icons"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blogPostContainer">
        <div className="postTop">
          <Link to="/">
            <LeftOutlined />
          </Link>
        </div>
        <div id="postInfo">
          <h1>{frontmatter.title}</h1>
        </div>
        <img className="postHeroImage" src={frontmatter.image} />
        <div
          className="newsPostContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
