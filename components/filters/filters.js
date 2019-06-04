import React, { Component } from 'react'

export default class Filter extends Component {
  render () {
    return (
      <aside class="menu " style={{ width: '200px' }}>
        <p class="menu-label is-size-6">Filters</p>
        <p class="menu-label is-size-7">General</p>
        <ul class="menu-list is-size-7">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
        </ul>
        <p class="menu-label is-size-7">Administration</p>
        <ul class="menu-list is-size-7">
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
        <p class="menu-label is-size-7">Transactions</p>
        <ul class="menu-list is-size-7">
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
    )
  }
}
