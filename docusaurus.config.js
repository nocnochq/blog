/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: [
    [
      'content-blog',
      {
        path: 'post',
        routeBasePath: 'post',
        include: ['*.md', '*.mdx']
      }
    ],
    'content-pages'
  ],

  themes: ['classic'],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Light.tt',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://light.tt/',
      },
      items: [
        { to: 'post', label: 'Blog', position: 'left' },
        { to: 'policy', label: 'Policy', position: 'right' },
        { to: 'terms', label: 'Terms', position: 'right' },

      ]
    }
  }
};

module.exports = config;
