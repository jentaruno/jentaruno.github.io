// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false
const withImage=require('next-images')

let assetPrefix = '/portfolio/'
let basePath = '/portfolio'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = withImage()
module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true
  },
}