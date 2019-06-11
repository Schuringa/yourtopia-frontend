import React, { Component } from 'react'
import Link from 'next/link'
import Search from './search/search'
import DesktopMenu from './desktop-menu/desktop-menu'
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
                className="image"
                src="/static/logo_new.png"
                alt="Price Help"
                height="125"
                width="125"
              />
            </div>
          </Link>
        </div>
        <div
          style={{ flexGrow: 1 }}
          className="columns is-mobile is-marginless"
        >
          <MobileMenu />
          <Search />
          <DesktopMenu />
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
