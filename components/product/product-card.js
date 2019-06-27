import React, { Component } from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

export default class ProductCard extends Component {
  render () {
    const { productData } = this.props
    return (
      <div className="product column is-flex  is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={productData.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="is-size-7">{productData.name}</p>
              <span className="subtitle is-size-7 has-text-danger">
                ${productData.price}
              </span>
              <a href={productData.direct_url}>
                <span className="subtitle is-size-7 has-text-grey-light">
                  - {productData.merchant}
                </span>

                <span
                  style={{ verticalAlign: 'middle' }}
                  className="icon is-small has-text-grey-light"
                >
                  <OpenInNewIcon size="0.75em" />
                </span>
              </a>
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
