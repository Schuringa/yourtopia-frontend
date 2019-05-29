// pages/index.js
import React from 'react'
import Default from '../layouts/default'
import '../css/index.scss'
import axios from 'axios'
const meta = { title: 'Yourtopia Staging', description: 'Staging site' }

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
        <div />
      </Default>
    )
  }
}

export default IndexPage
