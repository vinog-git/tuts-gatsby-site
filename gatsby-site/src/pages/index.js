import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Import CSS
// import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/style.scss"

// Import JS
// import "bootstrap/dist/js/bootstrap.min.js"
import Home from "../components/home"

const HomePage = props => {
  // TODO : Remove next line
  // window.location.replace('/blog');

  return (
    <Layout>
      <SEO title="HOME" />
      <Home />
    </Layout>
  )
}

export default HomePage
