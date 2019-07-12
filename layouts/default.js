import React, { Component } from 'react'
import Meta from '../components/meta'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default class Default extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blockTransition: true,
      timer: null
    }
  }

  componentDidMount () {
    this.state.timer = setTimeout(
      () => this.setState({ blockTransition: false }),
      500
    )
  }

  componentWillUnmount () {
    clearTimeout(this.state.timer)
  }

  render () {
    return (
      <div className={`${this.state.blockTransition ? 'preload' : ''}`}>
        <Meta props={this.props.meta} />
        <Header />
        <div className="main has-background-white-bis">
          {this.props.children}
        </div>
        <Footer />
        <svg
          style={{ width: 0, height: 0, position: 'absolute' }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="my-cool-gradient" x2="1" y2="1">
            <stop offset="0%" stop-color="#6fb642" />
            <stop offset="100%" stop-color="#20a568" />
          </linearGradient>
        </svg>
      </div>
    )
  }
}
