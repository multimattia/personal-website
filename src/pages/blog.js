import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  
  // const blogData = data.allMarkdownRemark.edges.node.frontmatter
  // console.log(blogData);
  
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here.</p>
    </Layout>
  );
}

export default BlogPage;
