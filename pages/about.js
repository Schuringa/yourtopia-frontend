import Default from '../layouts/default'
import '../styles.scss'
import TagMultipleIcon from 'mdi-react/TagMultipleIcon'
import AnchorIcon from 'mdi-react/AnchorIcon'
import LeafIcon from 'mdi-react/LeafIcon'
import ScaleBalanceIcon from 'mdi-react/ScaleBalanceIcon'
const meta = { title: 'About us', description: 'Staging site' }

export default () => (
  <Default meta={meta}>
    <section className="hero">
      <div className="columns">
        <div className="column is-two-fifths">
          <div className="content title-container">
            <h1 className="has-text-gradient">
              Making it easy to choose sustainable
            </h1>
            <p>
              Our e-commerce price comparison offers the smoothest
              comparison-shopping experience and recommends you products that
              are good for you & the environment.
            </p>
          </div>
        </div>
        <div className="column">
          <img className="banner-image" src="/static/laptop-mockup.png" />
        </div>
      </div>
    </section>
    <section className="hero section-fullwidth has-background-gradient ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="content">
            <h4 className=" has-text-white">
              Join the revolution for sustainable shopping
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="columns">
        <div className="column has-text-centered">
          <div className="content">
            <h1>One place for all your shopping</h1>
          </div>
        </div>
      </div>
      <div className="columns is-tablet">
        <div className="column">
          <div className="image-caption">
            <div className="content has-text-right has-text-centered-mobile">
              <div className="icon is-medium icon-gradient ">
                <LeafIcon size="3em" />
              </div>
              <h2>Sustainable consumption</h2>
              <p>
                Buying ecological groceries is easy. Why can’t e-commerce be
                sustainable? We are here to make it easy to browse all
                sustainable products available anywhere.
              </p>
            </div>
          </div>
          <div className="image-caption ">
            <div className="content has-text-right has-text-centered-mobile">
              <div className="icon is-medium has-text-gradient">
                <ScaleBalanceIcon size="3em" />
              </div>
              <h2>Exactly what you need</h2>
              <p>
                Bought something you never used? Something you had to return?
                Our buying-guides, informative filters and decision-making tools
                help you purchase exactly what you need.
              </p>
            </div>
          </div>
        </div>
        <div className="column has-text-centered">
          <img
            className="mobile-banner-image"
            src="/static/iphonex-mockup.png"
          />
        </div>
        <div className="column has-text-left">
          <div className="image-caption">
            <div className="content has-text-left has-text-centered-mobile">
              <div className="icon is-medium has-text-gradient">
                <TagMultipleIcon size="3em" />
              </div>
              <h2>The best offers</h2>
              <p>
                Combined with finding the best product from a standpoint of
                functionality and sustainability, we also help you find the
                cheapest price of all products on the web.
              </p>
            </div>
          </div>
          <div className="image-caption">
            <div className="content has-text-left has-text-centered-mobile">
              <div className="icon is-medium has-text-gradient">
                <AnchorIcon size="3em" />
              </div>
              <h2>Smart browsing</h2>
              <p>
                We know that finding the right product can be time-consuming.
                Our guides, comparison tools and personalized experience make it
                easy to find your way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        h2 {
          margin-top: 0 !important;
        }
        p {
          font-size: 0.85em;
        }
        .icon-gradient {
          color: #9c47fc !important;
          background: -webkit-linear-gradient(#9c47fc, #356ad2) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        .hero-body {
          align-items: center;
          display: flex;
        }
        .section-fullwidth {
          height: 30vh;
          margin: 2em -2em 2em -2em;
        }
        .mobile-banner-image {
          object-fit: cover;
          object-position: 0% 70%;
          width: 100%;
        }
        .banner-image {
          object-fit: cover;
          object-position: 0% 70%;
          width: 100%;
        }
        .image-caption {
          padding: 1.5em 0;
          min-height: 300px;
        }
        @media (width < 796px) {
          .section-fullwidth {
            margin: 2em -0.85em 2em -0.85em;
          }
          .mobile-banner-image {
            width: 50%;
          }
          .image-caption {
            padding: 1em 0;
            min-height: 100px;
          }
        }
        .title-container {
          padding: 3.5em 2em 2em 2em;
        }

        .section {
          padding-bottom: 2em;
        }
      `}
    </style>
  </Default>
)
