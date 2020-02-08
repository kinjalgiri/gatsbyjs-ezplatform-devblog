import { graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"

export default ({ data }) => {
  const blogPost = data.ezp.content.blogPost
  return (
    <div>
      <img src={blogPost.image.variation.uri} />
      <h1>{blogPost.title}</h1>
      <div>Posted at: {blogPost.publicationDate.date}</div>
      <div dangerouslySetInnerHTML={{ __html: blogPost.body.html5 }} />
    </div>
  )
}

export const query = graphql`
  query($blogId: Int!) {
    ezp {
      content {
        blogPost(locationId: $blogId) {
          title
          image {
            variation(identifier: small) {
              uri
            }
          }
          _name
          body {
            html5
            plaintext
          }
          publicationDate {
            date: format(pattern: "y-m-d H:m:s")
            timestamp
          }
          author {
            email
            id
            name
          }
        }
      }
    }
  }
`
