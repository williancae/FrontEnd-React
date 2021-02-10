const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
    withCSS(
        withSass({
            cssModules: false,
            env: {
                API_URL: "http://localhost:8383"
            }
        })
    )
)