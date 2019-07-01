import React, { Component } from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

export default class ProductCard extends Component {
  render () {
    const { productData } = this.props
    return (
      <div className="product column is-flex is-paddingless is-multiline">
        <div className="card product-card">
          <div className="image-block has-text-centered is-vcentered">
            <img src={productData.image} />
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="is-size-7">{productData.name}</p>
              {productData.price === productData.finalprice ? (
                <span className="subtitle is-size-7">
                  {(productData.price / 100).toLocaleString('en-GB', {
                    style: 'currency',
                    currency: productData.currency
                  })}
                </span>
              ) : (
                <div>
                  <span className="subtitle is-size-7 has-text-danger">
                    {(productData.finalprice / 100).toLocaleString('en-GB', {
                      style: 'currency',
                      currency: productData.currency
                    })}{' '}
                  </span>
                  <span className="subtitle is-size-7 sale-price">
                    {(productData.price / 100).toLocaleString('en-GB', {
                      style: 'currency',
                      currency: productData.currency
                    })}
                  </span>
                </div>
              )}
              <a href={productData.direct_url} target="_blank">
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
              min-width: 260px;
            }
            .product-card {
              width: 100%;
            }
            .image-block {
              height: 300px;
              width: 250px;
              padding-top: 2em;
              margin-left: auto;
              margin-right: auto;
            }
            .sale-price {
              text-decoration: line-through;
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
