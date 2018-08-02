module.exports = {
  siteMetadata: {
    title: "Xeiko - Like A Fox Design",
    author: "Derek Musser",
    description: "A Tour Through The Shadow Void"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
        minimum: 0.8,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sass`
  ],
}
