// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Diego Reynoso',
  tagline: '🎓 B.S. Computer Science',
  url: 'https://reynoso.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DiegoReyn/docusaurus-website/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DiegoReyn/docusaurus-website/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notes',
        path: 'notes',
        routeBasePath: 'notes',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'reynoso.dev',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/docs/intro',
            id: 'docs',
            activeBaseRegex: `/docs/`,
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/notes/landing', 
            id: 'notes',
            activeBaseRegex: `/notes/`,
            label: 'Notes', 
            position: 'left'
          },
          {
            to: 'https://github.com/DiegoReyn',
            label: 'GitHub🐙',
            position: 'right',
          },
          {
            to: 'https://linkedin.com/diegorj',
            label: 'LinkedIn💼',
            position: 'right',
          },
          {
            href: 'https://reynoso.dev/DiegoReynosoResume.pdf',
            label: 'Resume',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} | Diego Reynoso | Built with Docusaurus!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
