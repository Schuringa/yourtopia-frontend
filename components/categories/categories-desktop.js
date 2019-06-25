import React, { Component } from 'react'
import Link from 'next/link'
import categories from './categories_edited.json'

export default class CategoriesDesktop extends Component {
  render () {
    return (
      <div className="category-container">
        <div className="columns is-multiline is-marginless">
          {Object.keys(categories.Home).map(function (key, index) {
            return (
              <div key={index} className="column is-3">
                <Link href={`/products?category=${key}`}>
                  <a
                    onClick={() => this.props.onClick}
                    className="category-item is-size-7 has-text-dark"
                  >
                    {key}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
        <style jsx>
          {`
            .category-container {
              padding: 3em;
            }
            .category-item {
              padding: 0.5em;
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    )
  }
}
