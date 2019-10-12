import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import RecentPostsWidget from "../widgets/recent-posts"

function WidgetedTemplate(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className="row">
        <h2 className="col text-primary-color p-0">
          {title}
          <Link className="float-right" to="/blog">
            <i className="fas fa-arrow-left" /> Back to 'All Blog Posts'
          </Link>
        </h2>
      </div>
      <div className="row">
        <div
          className="col-8 d-block"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="col-4">
          <div>
            <RecentPostsWidget />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WidgetedTemplate
export const query = graphql`
  query WidgetedTemplate($slug: String!) {
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
