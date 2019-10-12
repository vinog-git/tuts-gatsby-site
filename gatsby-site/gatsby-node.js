const path = require("path")
const _ = require("lodash")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

const blogPostTemplate = path.resolve(`src/templates/blog.js`)
const WidgetedTemplate = path.resolve(`src/templates/widgeted-template.js`)
const tagTemplate = path.resolve(`src/templates/tags.js`)
const categoryTemplate = path.resolve(`src/templates/categories.js`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter____id] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  widget
                  tags
                  category
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: getTemplate(node),
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })

        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        let categories = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.category")) {
            categories = categories.concat(edge.node.frontmatter.category)
          }
        })
        // Eliminate duplicate tags
        categories = _.uniq(categories)

        // Make tag pages
        categories.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          })
        })
        return
      })
    )
  })
}

const getTemplate = node => {
  if (node.frontmatter.widget === true) {
    return WidgetedTemplate
  }
  return blogPostTemplate
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/tutorials` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
