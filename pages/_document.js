import Document, { Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Document {
  constructor (props) {
    super(props)
    this.state = { preload: false }
  }

  componentWillMount () {
    this.setState({ preload: true })
  }

  componentDidMount () {}
  render () {
    return (
      <Html>
        <Head />
        <body className={`${this.state.preload ? 'preload' : ''}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
