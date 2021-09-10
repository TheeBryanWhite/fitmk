module.exports = {
  siteMetadata: {
        title: `Fear is the Mind Killer`,
        description: `A podcast about fear and the things that frighten us`,
        author: `Bryan White`,
        siteUrl: `https://fearisthemindkiller.show`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }`,
      }
      },
      `gatsby-plugin-preload-fonts`,
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
            custom: {
                families: ['You Murderer', 'Noto'],
                urls: ['/fonts/fonts.css'],
            },
        },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tacticalconsciousness.com',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
        output: '/robots.txt',
        sitemap: 'https://www.tacticalconsciousness.com/sitemap.xml'
      },
    },  
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tactical Consciousness`,
        short_name: `taccon`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/triangle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`
  ],
}
