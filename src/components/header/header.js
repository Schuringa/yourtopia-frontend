import React, { Component } from 'react'
import logo from '../../img/logo.png'

export default class Header extends Component {
  render () {
    return (
      <nav
        className="navbar is-fixed-top"
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
              className="title has-text-weight-bold is-6"
            >
              YOURTOPIA
            </span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">Categories</div>
            <div className="navbar-item">Search bar</div>
          </div>
        </div>
      </nav>
    )
  }
}
