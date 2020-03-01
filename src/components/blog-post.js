import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import TimeAgo from 'react-timeago'

export default ({ data }) => {
  const blogPost = data.ezp.content.blogPost
    return (
      <Layout>
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container">
          <header className="blog-post-header">
          <h2 className="title mb-2">{blogPost.title}</h2>
          <div className="meta mb-3">
            <span className="date">Published <TimeAgo date={blogPost.publicationDate.date} /> by{" "}
            <Link to={`/authors/${blogPost.author.id}`}>
              {blogPost.author.name}
            </Link>
            </span>
          </div>
          </header>

          <div className="blog-post-body">
            <figure className="blog-banner">
                <a href="https://made4dev.com">
                <img src={blogPost.image.variation.uri} alt="" />
                </a>
                <figcaption className="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
          </figure>
          <div dangerouslySetInnerHTML={{ __html: blogPost.body.html5 }} />
          </div>
      </div>
      </article>
      </Layout>
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
