import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query RecentPostsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 5
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <div className="widget p-2">
        <h3 className="text-primary-color font-weight-bold">Recent Posts</h3>
        {edges.map(post => (
          <div className="my-3" key={Math.random()}>
            <Link to={post.node.fields.slug} className="link">
              {post.node.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
    )}
  />
)
