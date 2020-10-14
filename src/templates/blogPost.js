import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blogPost.scss"
import { Link } from "gatsby"
import { Row, Col } from "antd"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)

  return (
    <Layout>
      <SEO title="Blog" />
      <Row justify="center">
        <Col xs={24} lg={12}>
          <div id="blogPageContainer">
            <div className="blogPostContainer">
              <div id="postInfo">
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.subtitle}</h3>
              </div>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
              <div
                className="blogPostContent"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </Col>
        <Col xs={{ span: 0 }} lg={{ span: 2 }}>
          <div className="blogSideBar">t</div>
        </Col>
      </Row>
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
        subtitle
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
