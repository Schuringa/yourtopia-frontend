import React, { Component } from 'react'
import Link from 'next/link'

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="has-text-centered">
          <span className="footer-item is-size-7">
            <Link href="/about">
              <a>About</a>
            </Link>
          </span>
          <span className="footer-item is-size-7">
            <Link href="/contact-us">
              <a>Contact</a>
            </Link>
          </span>
          <span className="footer-item is-size-7">
            <Link href="/terms-and-conditions">
              <a>Terms & Conditions</a>
            </Link>
          </span>
        </div>
        <style jsx>{`
          .footer {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
          }

          .footer-item {
            padding: 0 1em;
          }
        `}</style>
      </footer>
    )
  }
}
