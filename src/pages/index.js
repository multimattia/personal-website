import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Matt Chan</title>
      </Helmet>
      <h1>Hello.</h1>
      <h2>This is a placeholder.</h2>
      <p>
        Need a human being? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
