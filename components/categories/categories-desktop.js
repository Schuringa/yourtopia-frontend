import React, { Component } from 'react'
import CategoryLink from './category-link'
import categories from './categories_edited.json'

export default class CategoriesDesktop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesChecked: []
    }
    this.showCategories = this.showCategories.bind(this)
    this.hideCategories = this.hideCategories.bind(this)
  }

  componentWillMount () {
    Object.keys(categories.Home).map((value, key) => {
      this.setState(prevState => ({
        categoriesChecked: [
          ...prevState.categoriesChecked,
          { key, name: value, isChecked: false }
        ]
      }))
    })
  }

  showCategories (key) {
    let newValue = { ...this.state.categoriesChecked[key], isChecked: true }
    let array = [...this.state.categoriesChecked]
    array.splice(key, 1, newValue)
    this.setState({
      categoriesChecked: array
    })
  }

  hideCategories (key) {
    let newValue = { ...this.state.categoriesChecked[key], isChecked: false }
    let array = [...this.state.categoriesChecked]
    array.splice(key, 1, newValue)
    this.setState({
      categoriesChecked: array
    })
  }

  render () {
    return (
      <div className="category-container">
        {this.state.categoriesChecked.map(function (value) {
          return (
            <div
              onMouseLeave={() => this.hideCategories(value.key)}
              className="columns is-multiline is-marginless is-paddingless"
            >
              <div key={value.key} className="column is-paddingless">
                <div onMouseEnter={() => this.showCategories(value.key)}>
                  <CategoryLink isParent value={value.name} />
                </div>
                <div className={`${value.isChecked ? '' : 'is-hidden'}`}>
                  {Object.keys(categories.Home[value.name]).map(
                    (key, index) => {
                      return (
                        <div key={index}>
                          <CategoryLink value={key} />
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
          )
        }, this)}

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
          `}
        </style>
      </div>
    )
  }
}
