import React, { Component } from 'react'
import Link from 'next/link'
import categories from './categories_edited.json'

export default class CategoriesMobile extends Component {
  render () {
    return (
      <div>
        {Object.keys(categories.Home).map(function (key, index) {
          return (
            <Link key={index} href={`/products?category=${key}`}>
              <a
                onClick={() => this.props.onClick}
                className="is-size-7 has-text-dark"
              >
                {key}
              </a>
            </Link>
          )
        })}
      </div>
    )
  }
}
