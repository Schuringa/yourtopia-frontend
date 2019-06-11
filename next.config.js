const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const config = {
  target: 'serverless'
}
module.exports = withSass(config, optimizedImages({ imagesFolder: 'static' }))
