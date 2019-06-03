import React, { Component } from 'react'
import Meta from '../components/meta'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default class Default extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blockTransition: true
    }
  }
  componentDidMount () {
    this.setState({ blockTransition: false })
  }
  render () {
    console.log(this.state.blockTransition)
    return (
      <div className={`${this.state.blockTransition ? 'preload' : ''}`}>
        <Meta props={this.props.meta} />
        <Header />
        <div className="main has-background-white-bis">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
