import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Blog | Matt Chan</title>
        <meta
          name="description"
          content="The blog page of prospective developer Matt Chan's web blog."
        ></meta>
      </Helmet>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <p>Posts will (eventually) show up here.</p>
    </Layout>
  )
}

export default BlogPage
