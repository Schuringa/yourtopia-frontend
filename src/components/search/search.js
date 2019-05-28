import React, { Component } from 'react'

export default class Search extends Component {
  render () {
    return (
      <div className="column is-8-tablet is-11-mobile">
        <div className="control has-icons-right">
          <input
            className="input has-text-grey-dark"
            type="test"
            placeholder="Search"
          />
          <span className="icon is-right has-text-grey">
            <i className="mdi mdi-24px mdi-magnify" />
          </span>
        </div>
      </div>
    )
  }
}
