import React from 'react'
import Meta from '../components/meta'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    <Header />
    <div className="main has-background-white-bis">{children}</div>
    <Footer />
  </div>
)
