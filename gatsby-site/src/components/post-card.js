import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ node }) => {
  return (
    <div className="float-left col-12 col-md-4 my-3">
      <div className="post-card p-2">
        <Link to={node.fields.slug} className="link">
          <div className="post-title">
            <h4 className="font-weight-bold m-0">{node.frontmatter.title}</h4>
            <span className="h6 small">{node.frontmatter.date}</span>
          </div>
          <Img
            className="post-thumbnail border"
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        </Link>

        <p>
          {node.excerpt}
          <span>&nbsp;</span>
          <u>
            <Link to={node.fields.slug} className="link">
              Read More
            </Link>
          </u>
        </p>
      </div>
    </div>
  )
}

export default PostCard
