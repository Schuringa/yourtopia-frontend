const withSass = require('@zeit/next-sass')
const config = {
  target: 'serverless'
}
module.exports = withSass(config)
