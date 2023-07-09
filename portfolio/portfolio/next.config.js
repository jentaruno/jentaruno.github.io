/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/portfolio/`
    basePath = `/${repo}/portfolio`
}

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig