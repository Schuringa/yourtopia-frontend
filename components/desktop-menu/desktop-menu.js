import React, { Component } from 'react'
import variables from '../../variables.json'
import CategoriesDesktop from '../categories/categories-desktop'

export default class DesktopMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayCategories: false
    }
    this.showCategories = this.showCategories.bind(this)
    this.hideCategories = this.hideCategories.bind(this)
  }

  showCategories () {
    this.setState({
      displayCategories: true
    })
  }

  hideCategories () {
    this.setState({
      displayCategories: false
    })
  }

  render () {
    const { displayCategories } = this.state
    return (
      <div className="columns">
        <div className={`${displayCategories ? 'overlay-open' : 'overlay'}`} />
        <div className="column">
          <div
            onMouseLeave={this.hideCategories}
            className="navbar-menu category-tab"
          >
            <div className="tabs is-marginless">
              <ul>
                <li
                  className={`is-size-7 ${
                    displayCategories ? 'is-active' : ''
                  }`}
                >
                  <a onMouseEnter={this.showCategories} className="is-size-7">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{ maxHeight: `${displayCategories ? '650px' : '0'}` }}
              onMouseEnter={this.showCategories}
              className="categories"
            >
              <div className="columns is-multiline">
                <CategoriesDesktop onClick={this.hideCategories} />
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .category-tab {
              padding: 0.75rem;
              height: 100%;
            }

            .categories {
              position: absolute;
              overflow: hidden;
              left: 0;
              top: ${variables.navbarHeight};
              width: 100%;
              background: white;
              transition: max-height 0.4s ease-in-out;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
              z-index: 3;
            }

            .category-list {
              margin: 2em 1em 1em 1em;
            }
          `}
        </style>
      </div>
    )
  }
}
