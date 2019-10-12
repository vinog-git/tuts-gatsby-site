import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

const AllBlogPosts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="BLOG" />
      <h2 className="text-primary-color">All Blog Posts ({edges.length})</h2>
      <div className="row my-3">
        {edges.map(({ node }, i) => (
          <PostCard key={Math.random()} node={node} />
        ))}
      </div>
    </Layout>
  )
}

export default AllBlogPosts

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter____id] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                resize(width: 30, height: 30) {
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
    }
  }
`
