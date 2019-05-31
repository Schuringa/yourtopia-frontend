import React, { Component } from 'react'
import data from './data.json'

export default class Categories extends Component {
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
      <React.Fragment>
        <div
          // style={{ opacity: `${displayCategories ? '1' : '0'}` }}
          className={`${
            displayCategories ? 'overlay-desktop-open' : 'overlay-desktop'
          }`}
        />
        <div className="column is-paddingless">
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
                  <a
                    href="/"
                    onMouseEnter={this.showCategories}
                    className="is-size-7"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{ height: `${displayCategories ? '250px' : '0'}` }}
              onMouseEnter={this.showCategories}
              className="categories"
            >
              <div className="columns is-multiline">
                {data.topnavi.navigation_node.children[2].children.map(
                  (value, index) => {
                    return (
                      <div key={index} className="column category-list">
                        <p>
                          <a
                            href={value.url_key}
                            className="has-text-weight-bold is-size-7"
                          >
                            {value.name}
                          </a>
                        </p>
                        {value.children.map((value, index) => {
                          return (
                            <p key={index}>
                              <a href={value.url_key} className="is-size-7">
                                {value.name}
                              </a>
                            </p>
                          )
                        })}
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
