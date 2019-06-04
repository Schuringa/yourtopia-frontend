import React, { Component } from 'react'
import TuneIcon from 'mdi-react/TuneIcon'

export default class FilterMobile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayFilters: false
    }
    this.showFilters = this.showFilters.bind(this)
    this.hideFilters = this.hideFilters.bind(this)
  }

  showFilters () {
    this.setState({
      displayFilters: true
    })
  }

  hideFilters () {
    this.setState({
      displayFilters: false
    })
  }

  render () {
    const { displayFilters } = this.state
    return (
      <React.Fragment>
        <div>
          <button onClick={this.showFilters} className="button">
            <span>Filters</span>
            <span className="icon">
              <TuneIcon size="1em" />
            </span>
          </button>
        </div>
        <div
          className="menu is-size-7 mobile-filters"
          style={{
            width: `${displayFilters ? '300px' : '0'}`,
            height: `${displayFilters ? '100vh' : '0'}`
          }}
        >
          <aside className="filter-menu-content">
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
      </React.Fragment>
    )
  }
}
