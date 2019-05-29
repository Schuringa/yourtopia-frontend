import React, { Component } from 'react'
import Link from 'next/link'

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="has-text-centered">
          <span className="footer-item is-size-7">
            <Link prefetch href="/about">
              <a>About</a>
            </Link>
          </span>
          <span className="footer-item is-size-7">
            <Link prefetch href="/contact-us">
              <a>Contact</a>
            </Link>
          </span>
          <span className="footer-item is-size-7">
            <Link prefetch href="/terms-and-conditions">
              <a>Terms & Conidtions</a>
            </Link>
          </span>
        </div>
      </footer>
    )
  }
}
