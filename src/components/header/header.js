import React, { Component } from 'react'
import logo from '../../img/logo.png'
import Search from '../search/search'
import Categories from '../categories/categories'

export default class Header extends Component {
  render () {
    return (
      <div>
        <nav
          className="navbar header is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item">
              <img
                className="image is-48x48"
                src={logo}
                alt="Yourtopia"
                height="48"
                width="48"
              />
              <span
                style={{ padding: '0.5em' }}
                className="title has-text-weight-bold is-6 has-text-grey-dark"
              >
                YOURTOPIA
              </span>
            </div>
          </div>
          <div
            style={{ flexGrow: 1 }}
            className="columns is-mobile is-marginless"
          >
            <a
              href="/"
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
            <Search />
            <Categories />
          </div>
        </nav>
      </div>
    )
  }
}
