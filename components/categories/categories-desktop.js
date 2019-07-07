import React, { Component } from 'react'
import CategoryLink from './category-link'
import categories from './categories_edited.json'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

export default class CategoriesDesktop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSubcategory: [],
      currentCategory: ''
    }
    this.showCategories = this.showCategories.bind(this)
    this.hideCategories = this.hideCategories.bind(this)
  }

  componentWillMount () {
    this.showCategories(Object.keys(categories.Home)[0])
  }

  showCategories (value) {
    this.setState({
      currentSubcategory: Object.keys(categories.Home[value]),
      currentCategory: value
    })
  }

  hideCategories () {
    this.setState({
      currentSubcategory: [],
      currentCategory: ''
    })
  }

  render () {
    return (
      <div className="category-container">
        <div className="columns">
          <div className="column is-3">
            {Object.keys(categories.Home).map((value, index) => {
              return (
                <div
                  key={index}
                  className="columns is-multiline is-marginless is-paddingless"
                >
                  <div className="column is-paddingless">
                    <span onMouseEnter={() => this.showCategories(value)}>
                      <div className="level">
                        <CategoryLink isParent value={value} />
                        {this.state.currentCategory === value ? (
                          <span className="icon has-text-success">
                            <ChevronRightIcon size="2em" />
                          </span>
                        ) : null}
                      </div>
                    </span>
                  </div>
                </div>
              )
            }, this)}
          </div>
          <div className="column">
            <div className="sub-category-container">
              <div className="columns is-multiline">
                {this.state.currentSubcategory.map((value, index) => {
                  return (
                    <div
                      className="column is-paddingless is-4 has-text-grey-light"
                      key={index}
                    >
                      <CategoryLink value={value} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .category-container {
              padding: 3em;
              width: 100%;
            }
            .category-item {
              padding: 0.5em;
              text-decoration: underline;
            }
            .sub-category-container {
              margin-top: 0.475em;
            }
          `}
        </style>
      </div>
    )
  }
}
