const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Amazing Nodejs",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `ezp`,
        url: `http://localhost:8000/graphql`,
        typeName: `eZPlatform`,
        refetchInterval: 60,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `amazingnodejs`,
      },
    },
  ],
}
