import React from "react";

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Contact | Matt Chan</title>
        <meta
          name="description"
          content="The contact page of prospective developer Matt Chan's web blog."
        ></meta>
      </Helmet>
      <h1>Contact me:</h1>
      <p>You can contact me on websites.</p>
    </Layout>
  )
}

export default ContactPage;
