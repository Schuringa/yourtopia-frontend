import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

export default class Search extends Component {
  render () {
    return (
      <div className="column is-8-tablet is-9-mobile">
        <div className="control has-icons-right">
          <input
            className="input has-text-grey-dark"
            type="test"
            placeholder="Search"
          />
          <span className="icon is-right has-text-grey">
            <Icon path={mdiMagnify} size={1} />
          </span>
        </div>
      </div>
    )
  }
}
