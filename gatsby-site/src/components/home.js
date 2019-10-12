import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import PostCard from "./post-card"

const Home = () => (
  <StaticQuery
    query={graphql`
      query RecentPostsForHomePage {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    `}
    render={data => {
      const edges = data.allMarkdownRemark.edges
      return (
        <div>
          <div className="home text-center bg-grey p-4">
            <div className="h1 text-primary-color m-5 font-weight-bold">
              LEARN WITH EASE
            </div>
            <div className="h4 w-75 mx-auto line-height-2">
              <p>Learn frontend with easy tutorials and steps.</p>
              <p>HTML5, CSS3, JavaScript, Angular, ReactJS</p>
            </div>
            <div className="my-4 h5">
              <Link to="/blog">
                <button className="appearnce-none p-3 action-button">
                  View all Tutorials
                </button>
              </Link>
            </div>
          </div>
          <div className="row my-3">
            {edges.map(({ node }, i) => {
              if (node.frontmatter.template !== "info") {
                return <PostCard key={Math.random()} node={node} />
              }
            })}
          </div>
        </div>
      )
    }}
  />
)

export default Home
