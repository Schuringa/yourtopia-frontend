import React, { Component } from 'react'
import categories from './categories.json'

export default class Categories extends Component {
  render () {
    return (
      <div className="category-container">
        {Object.keys(categories.Home).map(function (key, index) {
          return (
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true" />
              </span>
              {key}
            </a>
          )
        })}
        <style jsx>
          {`
            .category-container {
              padding-top: 2em;
            }
          `}
        </style>
      </div>
    )
  }
}
