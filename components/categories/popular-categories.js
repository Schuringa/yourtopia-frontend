import React, { Component } from 'react'
import Link from 'next/link'
import categories from './categories_edited.json'

export default class PopularCategories extends Component {
  render () {
    return (
      <div className="card category-container">
        <span className="heading is-size-6"> Popular Categories</span>
        <div className="columns is-multiline is-marginless">
          {Object.keys(categories.Home).map(function (key, index) {
            return (
              <div key={index} className="column is-paddingless is-2 is-size-7">
                <div className="category-item">
                  <Link key={index} href={`/products?category=${key}`}>
                    <div className="has-text-weight-semibold">
                      <a className="is-size-7 has-text-dark">{key}</a>
                    </div>
                  </Link>
                  {Object.keys(categories.Home[key]).map(function (key, index) {
                    return (
                      <div>
                        <Link key={index} href={`/products?category=${key}`}>
                          <a className="is-size-7 has-text-dark">{key}</a>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <style jsx>
          {`
            .category-container {
              margin-top: 2em;
              padding: 1em;
            }
            .category-item {
              padding-bottom: 1em;
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    )
  }
}
