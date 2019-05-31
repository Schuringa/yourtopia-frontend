import React, { Component } from 'react'
import Link from 'next/link'
import Search from './search/search'
import Categories from './categories/categories'
import MobileMenu from './mobile-menu/mobile-menu'

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        <nav
          className="navbar has-background-white"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link prefetch href="/">
              <div className="navbar-item has-cursor-pointer">
                <img
                  className="image is-48x48"
                  src="/static/logo.png"
                  alt="Schuringa"
                  height="48"
                  width="48"
                />

                <span
                  style={{ padding: '0.5em' }}
                  className="title has-text-weight-bold is-6 has-text-grey-dark"
                >
                  Schuringa
                </span>
              </div>
            </Link>
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
