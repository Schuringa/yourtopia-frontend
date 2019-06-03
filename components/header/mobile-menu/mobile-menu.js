import React, { Component } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

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
          className="mobile-menu is-hidden-tablet"
        >
          <aside class="menu mobile-menu-content">
            <div style={{ padding: '1em' }}>
              <p class="menu-label">General</p>
              <ul class="menu-list">
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Customers</a>
                </li>
              </ul>
              <p class="menu-label">Administration</p>
              <ul class="menu-list">
                <li>
                  <a>Team Settings</a>
                </li>
                <li>
                  <a class="is-active">Manage Your Team</a>
                  <ul>
                    <li>
                      <a>Members</a>
                    </li>
                    <li>
                      <a>Plugins</a>
                    </li>
                    <li>
                      <a>Add a member</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Invitations</a>
                </li>
                <li>
                  <a>Cloud Storage Environment Settings</a>
                </li>
                <li>
                  <a>Authentication</a>
                </li>
              </ul>
              <p class="menu-label">Transactions</p>
              <ul class="menu-list">
                <li>
                  <a>Payments</a>
                </li>
                <li>
                  <a>Transfers</a>
                </li>
                <li>
                  <a>Balance</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </span>
    )
  }
}
