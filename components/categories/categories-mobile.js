import React, { Component } from 'react'
import CategoryLink from './category-link'
import categories from './categories_edited.json'

export default class CategoriesMobile extends Component {
  render () {
    return (
      <div>
        {Object.keys(categories.Home).map(function (key, index) {
          return (
            <div key={index}>
              <CategoryLink value={key} />
            </div>
          )
        })}
      </div>
    )
  }
}
