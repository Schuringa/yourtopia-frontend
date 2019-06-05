import React, { Component } from 'react'
import Link from 'next/link'
import Search from './search/search'
import Categories from './categories/categories'
import MobileMenu from './mobile-menu/mobile-menu'

export default class Header extends Component {
  render () {
    return (
      <nav
        className="navbar header has-background-white is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link prefetch href="/">
            <div className="navbar-item has-cursor-pointer">
              <img
                className="image is-48x48"
                src="/static/logo.png"
                alt="Price Help"
                height="48"
                width="48"
              />

              <span
                style={{ padding: '0.5em' }}
                className="title has-text-weight-bold is-6 has-text-grey-dark"
              >
                Price Help
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
        <style jsx>{`
          .header {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            z-index: 4;
          }
        `}</style>
      </nav>
    )
  }
}
