import React, { Component } from 'react'

export default class MobileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayMenu: false
    }
    this.hideMenu = this.hideMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
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
  }

  toggleMenu () {
    this.setState(prevState => ({
      displayMenu: !prevState.displayMenu
    }))
  }

  render () {
    const { displayMenu } = this.state
    return (
      <span ref={this.setWrapperRef}>
        <span
          role="button"
          className="navbar-burger menu-button"
          aria-label="menu"
          aria-expanded="false"
          onClick={this.toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
        <div
          style={{ width: `${displayMenu ? '250px' : '0'}` }}
          className="mobile-menu is-hidden-tablet"
        />
      </span>
    )
  }
}
