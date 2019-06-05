import React, { Component } from 'react'

export default class Filter extends Component {
  render () {
    return (
      <aside className="menu is-hidden-mobile" style={{ width: '200px' }}>
        <p className="menu-label is-size-6">Filters</p>
        <p className="menu-label is-size-7">Collection</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>Spring</a>
          </li>
          <li>
            <a>Summer</a>
          </li>
          <li>
            <a>Winter</a>
          </li>
        </ul>
        <p className="menu-label is-size-7">Color</p>
        <ul className="menu-list is-size-7">
          <li>
            <ul>
              <li>
                <a>Blue</a>
              </li>
              <li>
                <a>Red</a>
              </li>
              <li>
                <a>Green</a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="menu-label is-size-7">Occasion</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>Business</a>
          </li>
          <li>
            <a>Evening</a>
          </li>
          <li>
            <a>Leisure</a>
          </li>
        </ul>
        <p className="menu-label is-size-7">Material</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>Cotton</a>
          </li>
          <li>
            <a>Denim</a>
          </li>
          <li>
            <a>Fleece</a>
          </li>
        </ul>
      </aside>
    )
  }
}
