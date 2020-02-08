import { graphql, Link } from "gatsby"
import React from "react"
import { makeBlogPath } from "../utils"
import Layout from "../components/layout"
import TimeAgo from 'react-timeago'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center">
        <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
        <form className="signup-form form-inline justify-content-center pt-3">
          <div className="form-group">
            <label className="sr-only" htmlFor="semail">Your email</label>
            <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
          </div>
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
      {data.ezp.content.blogPosts.edges.map((blog, i) => (
          <div key={blog.node._location.id} className="item mb-5">
            <div className="media">
              <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={blog.node.image.variation.uri} />
              <div className="media-body">
              <h3 className="title mb-1">
                <Link key={i} to={makeBlogPath(blog.node.title)}>{blog.node.title}</Link>
              </h3>
              <div className="meta mb-1">
                <span className="date">Published <TimeAgo date={blog.node.publicationDate.dateTime} /></span>
              </div>
              <div className="intro">{blog.node.title}</div>
            <Link className="more-link" key={i} to={makeBlogPath(blog.node.title)}>Read more &rarr;</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
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
              dateTime: format(pattern:"Y-m-d h:i:s")
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
