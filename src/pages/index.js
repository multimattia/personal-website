import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer";
import Header from '../components/header';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm matt half-stack developinef</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
  return (
    <div className="">
      <Header />
      <h1>Hello.</h1>
      <h2>I'm matt half-stack developinef</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage;
