import React, { Component } from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

export default class ProductCard extends Component {
  render () {
    return (
      <div className="product column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3" />
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="is-6">John Smith</p>
              <span className="subtitle is-7 has-text-danger">$492 </span>
              <a className="subtitle is-7 has-text-grey-light">- Fetch</a>
              <span
                style={{ verticalAlign: 'middle' }}
                className="icon is-small has-text-grey-light"
              >
                <OpenInNewIcon size="0.75em" />
              </span>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .product {
              padding: 0.25em 0.25em !important;
            }
          `}
        </style>
      </div>
    )
  }
}
