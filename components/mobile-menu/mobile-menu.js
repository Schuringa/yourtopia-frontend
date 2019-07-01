import React, { Component } from 'react'
import CategoriesMobile from '../categories/categories-mobile'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'
import variables from '../../variables.json'

export default class MobileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayMenu: false
    }
    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount () {
    this.targetElement = document.querySelector('#mobile-menu')
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
    clearAllBodyScrollLocks()
    this.hideMenu()
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef (node) {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.hideMenu()
    }
  }

  hideMenu () {
    this.setState({
      displayMenu: false
    })
    enableBodyScroll(this.targetElement)
  }

  showMenu () {
    this.setState({
      displayMenu: true
    })
    disableBodyScroll(this.targetElement)
  }

  render () {
    const { displayMenu } = this.state
    return (
      <span ref={this.setWrapperRef}>
        <span
          role="button"
          className={`navbar-burger menu-button ${
            displayMenu ? 'is-active' : ''
          }`}
          aria-label="menu"
          aria-expanded="false"
          onClick={displayMenu ? this.hideMenu : this.showMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
        <div
          id="mobile-menu"
          style={{ width: `${displayMenu ? '100%' : '0'}` }}
          className="mobile-menu has-background-white-ter is-hidden-tablet is-paddingless"
        >
          <aside className="mobile-menu-content">
            <CategoriesMobile onClick={this.hideMenu} />
          </aside>
        </div>
        <style jsx>{`
          .mobile-menu {
            position: fixed;
            overflow-y: scroll;
            overflow-x: hidden;
            left: 0;
            bottom: 0;
            top: ${variables.navbarHeight};
            background: white;
            transition: width 0.3s ease-in-out;
          }

          .mobile-menu-content {
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            padding: 1em;
          }

          .menu-button {
            width: 2rem;
          }

          .navbar-burger:hover {
            background-color: transparent;
          }
        `}</style>
      </span>
    )
  }
}
