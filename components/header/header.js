import React, { Component } from 'react'
import Link from 'next/link'
import Search from '../search/search'
import DesktopMenu from '../desktop-menu/desktop-menu'
import MobileMenu from '../mobile-menu/mobile-menu'

export default class Header extends Component {
  render () {
    return (
      <nav
        className="navbar header has-background-white is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div style={{ flexGrow: 0.7 }} className="navbar-brand">
          <Link prefetch href="/">
            <div className="navbar-item header-item has-cursor-pointer">
              <img
                className="image is-hidden-mobile"
                src="/static/pricehelp_logo.png"
                alt="Price Help"
                height="125"
                width="125"
              />
              <img
                className="image is-hidden-tablet"
                src="/static/pricehelp_logo_icon.png"
                alt="Price Help"
                height="28"
                width="28"
              />
            </div>
          </Link>
          <div
            style={{ flexGrow: 1 }}
            className="navbar-item header-item is-paddingless"
          >
            <Search />
          </div>
          <div className="navbar-item header-item has-cursor-pointer is-hidden-desktop">
            <MobileMenu />
          </div>
        </div>
        <DesktopMenu />
        <style jsx>{`
          .header {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            z-index: 4;
          }

          .header-item {
            padding-top: 0;
            padding-bottom: 0;
          }
        `}</style>
      </nav>
    )
  }
}
