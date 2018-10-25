const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Sean McNally',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-stylus',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
  ],
}
