import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Cards from "../components/Cards"

const IndexPage = () => {

  return (
    <Layout>
      <section className="intro-section">
        <div class="custom-shape-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>

        <h1>Asrar Ahmed Khan</h1>
        <h2>Civil Engineer | Consultant | Architect</h2>
        <Link to="/#contact" className="button">Contact Me</Link>

        <div class="custom-shape-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className="services-section">
        <h1>My Works</h1>
        <Cards />
      </section>

      <section className="contact-section" id="contact">
        <div class="custom-shape-divider-top-2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>

        <h1>Contact</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
