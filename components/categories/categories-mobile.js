import React, { Component } from 'react'
import CategoryLink from './category-link'
import categories from './categories_edited.json'

export default class CategoriesMobile extends Component {
  render () {
    return (
      <div>
        <aside className="menu">
          <ul className="menu-list">
            {Object.keys(categories.Home).map(function (key, index) {
              return (
                <li key={index}>
                  <p class="menu-label">
                    <CategoryLink value={key} />
                  </p>
                  <ul>
                    {Object.keys(categories.Home[key]).map(function (
                      key,
                      index
                    ) {
                      return (
                        <li key={index}>
                          <CategoryLink value={key} />
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    )
  }
}
