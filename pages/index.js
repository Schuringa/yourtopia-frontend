// pages/index.js
import React from 'react'
import Default from '../layouts/default'
import '../styles.scss'
const meta = { title: 'Price Help Staging', description: 'Staging site' }

class IndexPage extends React.Component {
  render () {
    return (
      <Default meta={meta}>
        <section className="hero has-text-centered">
          <div className="hero-body banner">
            <div className="container">
              <h1 className="title has-text-weight-normal">
                Sustainable shopping starts at Price
                <span className="has-text-success">Help</span>
              </h1>
              <h2 className="subtitle">
                Search and discover millions of products, used and new, local
                and international from the whole internet
              </h2>
            </div>
          </div>
        </section>
        <section className="hero card">
          <img
            className="banner-image"
            src="/static/forest_banner.jpg"
            alt="Forest banner"
          />
          <div className="columns banner">
            <div className="column has-text-centered">
              <div>
                <p className="heading">You can buy everything</p>
                <p className="is-size-7">12 million goods from UK merchants</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div>
                <p className="heading">Best prices</p>
                <p className="is-size-7">Find the cheapest</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div>
                <p className="heading">Protect the environment</p>
                <p className="is-size-7">
                  Product that last long & have sustainable production
                </p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div>
                <p className="heading">Reliable merchants</p>
                <p className="is-size-7">
                  Passed the PriceHelp sustainability test
                </p>
              </div>
            </div>
          </div>
        </section>
        <style jsx>
          {`
            .banner {
              padding: 1em;
            }

            .banner-image {
              object-fit: cover;
              height: 35vh;
              width: 100%;
            }
          `}
        </style>
      </Default>
    )
  }
}

export default IndexPage
