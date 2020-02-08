const path = require(`path`)
const { makeBlogPath } = require(`./src/utils`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      ezp {
        content {
          blogPosts(sortBy: _datePublished) {
            edges {
              node {
                _location {
                  id
                }
                title
                publicationDate{
                  dateTime: format(pattern:"d-m-Y h:i:s")
                  date: format(pattern:"d-m-Y h:i:s")
                  timestamp
                }
              }
            }
          }
        }
      }
    }
  `)

  data.ezp.content.blogPosts.edges.forEach(blog => {
    actions.createPage({
      path: makeBlogPath(blog.node.title),
      component: path.resolve(`./src/components/blog-post.js`),
      context: {
        blogId: parseInt(blog.node._location.id),
      },
    })
  })
}
