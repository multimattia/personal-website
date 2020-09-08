import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me:</h1>
      <p>A link to my <Link to="/contact">contacts page.</Link></p>
    </Layout>
  )
}

export default AboutPage;