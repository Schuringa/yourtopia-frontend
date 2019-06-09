import React, { Component } from 'react'
import TuneIcon from 'mdi-react/TuneIcon'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

export default class FilterMobile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayFilters: false
    }
    this.showFilters = this.showFilters.bind(this)
    this.hideFilters = this.hideFilters.bind(this)
  }

  componentDidMount () {
    this.targetElement = document.querySelector('#filter-menu')
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

  showFilters () {
    disableBodyScroll(this.targetElement)
    this.setState({
      displayFilters: true
    })
  }

  hideFilters () {
    enableBodyScroll(this.targetElement)
    this.setState({
      displayFilters: false
    })
  }

  render () {
    const { displayFilters } = this.state
    return (
      <div className="is-hidden-tablet">
        <button onClick={this.showFilters} className="button is-small">
          <span>Filters</span>
          <span className="icon">
            <TuneIcon size="1em" />
          </span>
        </button>
        <div
          id="filter-menu"
          className="mobile-filters"
          style={{
            width: `${displayFilters ? '100%' : '0'}`
          }}
        >
          <aside className="menu is-size-7  mobile-filters-content">
            <span
              role="button"
              className={`navbar-burger menu-button is-active`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.hideFilters}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </span>
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
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
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
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
          </aside>
        </div>
        <style jsx>{`
          .mobile-filters {
            position: fixed;
            overflow-y: scroll;
            overflow-x: hidden;
            left: 0;
            width: 0;
            top: 0;
            bottom: 0;
            background: white;
            transition: width 0.3s ease-in-out;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            z-index: 4;
          }
          .mobile-filters-content {
            white-space: nowrap;
            display: inline-block;
            width: 100%;
            padding: 0 1em;
          }
        `}</style>
      </div>
    )
  }
}
