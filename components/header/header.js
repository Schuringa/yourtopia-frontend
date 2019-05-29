import React, { Component } from 'react'
import Search from './search/search'
import Categories from './categories/categories'
import MobileMenu from './mobile-menu/mobile-menu'

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
                src="/static/logo.png"
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
            <MobileMenu />
            <Search />
            <Categories />
          </div>
        </nav>
      </div>
    )
  }
}
