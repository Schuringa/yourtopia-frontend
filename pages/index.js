// pages/index.js
import React from 'react'
import Default from '../layouts/default'
import '../styles.scss'
const meta = { title: 'Price Help Staging', description: 'Staging site' }

class IndexPage extends React.Component {
  render () {
    return (
      <Default meta={meta}>
        <div>MAIN PAGE!</div>
      </Default>
    )
  }
}

export default IndexPage
