// pages/index.js
import React from 'react'
import Default from '../layouts/default'
import Products from '../layouts/products'
import axios from 'axios'
import '../css/index.scss'
const meta = { title: 'Price Help Staging', description: 'Staging site' }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      dog: {}
    }
    this.fetchData = this.fetchData.bind(this)
  }
  async componentDidMount () {
    await this.fetchData()
  }
  async fetchData () {
    this.setState({ loading: true })
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?limit=1'
    )
    this.setState({
      dog: data[0],
      loading: false
    })
  }
  render () {
    return (
      <Default meta={meta}>
        <Products />
      </Default>
    )
  }
}

export default IndexPage
