import { graphql, Link } from "gatsby"
import React from "react"
import { makeBlogPath } from "../utils"
import dateformat from "dateformat"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/packages/gatsby-source-graphql/">
        Using gatsby-source-graphql
      </a>
    </p>
    {data.ezp.content.blogPosts.edges.map((blog, i) => (
      <Link key={i} to={makeBlogPath(blog.node.title)}>
        <h2>
          {dateformat(blog.node.publicationDate.timestamp, `fullDate`)} - {blog.node.title}
        </h2>
        <img src={blog.node.image.variation.uri} />
      </Link>
    ))}
  </div>
)

export const query = graphql`
  query {
    ezp {
      content {
        blogPosts(sortBy: _datePublished) {
          edges {
            node {
              _location {
                id
              }
              image {
                variation(identifier: small) {
                  uri
                }
              }
              title
              publicationDate{
                dateTime: format(pattern:"d-m-Y h:i:s")
                date: format(pattern:"Y-m-d")
                timestamp
              }
            }
          }
        }
      }
    }
  }
`
