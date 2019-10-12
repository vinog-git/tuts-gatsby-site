import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className="row">
        <h2 className="col text-primary-color p-0">
          {/* {title} */}
          <Link className="float-right" to="/blog">
            <i className="fas fa-arrow-left" /> Back to 'All Blog Posts'
          </Link>
        </h2>
      </div>

      {/* <Img fluid={post.frontmatter.image.childImageSharp.fluid} /> */}
      <div className="row d-block" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
