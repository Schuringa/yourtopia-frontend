import React, { Component } from 'react'

export default class Breadcrumb extends Component {
  render () {
    return (
      <nav className="breadcrumb is-size-7" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Mens</a>
          </li>
          <li>
            <a href="#">Clothing</a>
          </li>
          <li>
            <a href="#">Jackets</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Winter Jackets
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
