import React, { Component } from 'react'

export default class Categories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCategories: false
    }
    this.showCategories = this.showCategories.bind(this)
    this.hideCategories = this.hideCategories.bind(this)
  }

  showCategories () {
    this.setState({
      showCategories: true
    })
  }

  hideCategories () {
    this.setState({
      showCategories: false
    })
  }

  render () {
    const { showCategories } = this.state
    return (
      <div onMouseLeave={this.hideCategories}>
        <div className="tabs is-marginless">
          <ul>
            <li className={`is-size-7 ${showCategories ? 'is-active' : ''}`}>
              <a onMouseEnter={this.showCategories} className="is-size-7">
                Categories
              </a>
            </li>
          </ul>
        </div>

        {showCategories ? <div className="categories">testing</div> : null}
      </div>
    )
  }
}
