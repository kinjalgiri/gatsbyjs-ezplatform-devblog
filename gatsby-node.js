const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const dateformat = require(`dateformat`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
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

// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions
//   createResolvers({
//     eZplatform_BlogPost: {
//       createdAt: {
//         type: `String`,
//         resolve(source, args, context, info) {
//           return dateformat(source.date, `fullDate`)
//         },
//       },
//       post: {
//         resolve(source, args, context, info) {
//           return remark()
//             .use(html)
//             .processSync(source.post).contents
//         },
//       },
//     },
//     eZplatform_Asset: {
//       image: {
//         type: `File`,
//         // projection: { url: true },
//         resolve(source, args, context, info) {
//           return createRemoteFileNode({
//             url: 'http://localhost:8000/' + source.uri,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           })
//         },
//       },
//     },
//   })
// }
