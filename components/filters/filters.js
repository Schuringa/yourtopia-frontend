import React, { Component } from 'react'
export default class Filter extends Component {
  render () {
    return (
      <aside className="menu is-hidden-mobile filters">
        <p className="menu-label is-size-6">Filters</p>
        <p className="menu-label is-size-7">Collection</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>
              <input type="checkbox" /> Spring
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" /> Summer
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" /> Winter
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-7">Color</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>
              <input type="checkbox" />
              Blue
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Red
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Green
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-7">Occasion</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>
              <input type="checkbox" />
              Business
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Evening
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Leisure
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-7">Material</p>
        <ul className="menu-list is-size-7">
          <li>
            <a>
              <input type="checkbox" />
              Cotton
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Denim
            </a>
          </li>
          <li>
            <a>
              <input type="checkbox" />
              Fleece
            </a>
          </li>
        </ul>
        <style jsx>{`
          .filters {
            width: 200px;
          }
          input {
            margin-right: 1em;
          }
        `}</style>
      </aside>
    )
  }
}
