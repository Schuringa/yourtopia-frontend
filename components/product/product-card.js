import React, { Component } from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

export default class ProductCard extends Component {
  render () {
    const { productData } = this.props
    return (
      <div className="product column is-flex  is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <div className="card">
          <div className="image-block has-text-centered is-vcentered">
            <img className="product-image" src={productData.image} />
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
              width: 250px;
            }
            .image-block {
              height: 300px;
              margin-left: auto;
              margin-right: auto;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    )
  }
}
