import Default from '../layouts/default'
import '../css/index.scss'
const meta = { title: 'About us', description: 'Staging site' }

export default () => (
  <Default meta={meta}>
    <div className="columns">
      <div className="column has-text-centered">
        <h3 className="title is-size-6">About</h3>
        <p className="is-size-7">
          You are one of the first users of the newly opened PriceHelp. Our
          service allow you to choose from a majority of all United Kingdom’s
          retailers and brands, helping you find the best product for your need
          with ease. We have many new features to be released to stay tuned.
          Your feedback is always appreciated, so please feel free to contact
          us.
        </p>
      </div>
    </div>
  </Default>
)
