module.exports = {
    siteMetadata: {
        title: `The Answer To Crime`,
        description: `Petition for clemency & commutation service.`,
        author: ``,
    },
    plugins: [
        "gatsby-plugin-eslint",
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `the-answer-to-crime`,
                short_name: ``,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4dc0b5`,
                display: `minimal-ui`,
                icon: `src/images/light-icon.png`,
            },
        },
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(`./tailwind.config.js`),
                    require(`autoprefixer`),
                    require(`cssnano`),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
                purgeOnly: [`src/css/style.css`],
            },
        },
        `gatsby-plugin-offline`,
    ],
};
