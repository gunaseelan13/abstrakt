module.exports = {  
  siteMetadata: {
    title: `Sketch Repo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://salty-tundra-89912.herokuapp.com`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `file`,
          `user`
        ]
      },
    },
  ],
}