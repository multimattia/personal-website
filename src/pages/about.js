import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>About | Matt Chan</title>
        <meta
          name="description"
          content="The about page of prospective developer Matt Chan's web blog."
        ></meta>
      </Helmet>
      <h1>About Me:</h1>
      <p>
        A link to my <Link to="/contact">contacts page.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
