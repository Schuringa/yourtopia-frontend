import React, { Component } from 'react'

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
      <div className="column is-paddingless">
        <div
          onMouseLeave={this.hideCategories}
          className="navbar-menu category-tab"
        >
          <div className="tabs is-marginless">
            <ul>
              <li
                className={`is-size-7 ${displayCategories ? 'is-active' : ''}`}
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
            style={{ height: `${displayCategories ? '300px' : '0'}` }}
            onMouseEnter={this.showCategories}
            className="categories"
          >
            testing
          </div>
        </div>
      </div>
    )
  }
}
