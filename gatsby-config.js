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
    'gatsby-plugin-offline',
    'gatsby-plugin-stylus',
  ],
}
