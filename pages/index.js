// pages/index.js
import React from 'react'
import Default from '../layouts/default'
import CartOutlineIcon from 'mdi-react/CartOutlineIcon'
import TagOutlineIcon from 'mdi-react/TagOutlineIcon'
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon'
import MedalIcon from 'mdi-react/MedalIcon'
import '../styles.scss'
const meta = { title: 'Price Help Staging', description: 'Staging site' }

class IndexPage extends React.Component {
  render () {
    return (
      <Default meta={meta}>
        <section className="hero has-text-centered">
          <div className="hero-body banner">
            <div className="container">
              <h1 className="title has-text-weight-normal has-text-black">
                Sustainable shopping starts at Price
                <span className="has-text-success">Help</span>
              </h1>
              <h2 className="subtitle is-family-secondary">
                Search and discover millions of products, used and new, local
                and international from the whole internet
              </h2>
            </div>
          </div>
        </section>
        <section className="hero card">
          <div className="image-container">
            <img
              className="banner-image"
              src="/static/forest_banner_compressed.jpg"
              alt="Forest banner"
            />
            <div className="image-text is-size-3 is-family-secondary">
              Our journey to save the planet
            </div>
          </div>
          <div className="columns banner">
            <div className="column has-text-centered">
              <div className="icon">
                <CartOutlineIcon size="2.5em" />
              </div>
              <div>
                <p className="heading has-text-black">You can buy everything</p>
                <p className="is-size-7">12 million goods from UK merchants</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="icon">
                <TagOutlineIcon size="2.5em" />
              </div>
              <div>
                <p className="heading has-text-black">Best prices</p>
                <p className="is-size-7">Find the cheapest</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="icon">
                <ShieldOutlineIcon size="2.5em" />
              </div>
              <div>
                <p className="heading has-text-black">
                  Protect the environment
                </p>
                <p className="is-size-7">
                  Product that last long & have sustainable production
                </p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="icon has-text-success">
                <MedalIcon size="2.5em" />
              </div>
              <div>
                <p className="heading has-text-black">Reliable merchants</p>
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

            .image-container {
              position: relative;
              text-align: center;
            }

            .image-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
            }
          `}
        </style>
      </Default>
    )
  }
}

export default IndexPage
