import React from "react"

import Header from  "./header";
import Footer from  "./header";

const Layout = props => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout
