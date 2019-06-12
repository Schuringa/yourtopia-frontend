import React, { Component } from 'react'
import MagnifyIcon from 'mdi-react/MagnifyIcon'

export default class Search extends Component {
  render () {
    return (
      <div className="column is-paddingless">
        <div className="control has-icons-right">
          <input
            className="input has-text-grey-dark"
            type="test"
            placeholder="Search"
          />
          <span className="icon is-right has-text-grey">
            <MagnifyIcon size="1.5em" />
          </span>
        </div>
      </div>
    )
  }
}
