module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Sailing To Mars DJ Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Oswald`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Bebas+Neue`
    //       },
    //       {
    //         family: `Roboto`,
    //         variant: [`100`, `400`, `700`]
    //       },
    //       {
    //         family: `Pacifico`
    //       }
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Bebass Neue', 'Roboto', 'Pacifico']
    //     }
    //   }
    // },
  ],
};
