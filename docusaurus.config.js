// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Packed',
  tagline: 'hello from packed',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://packed.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Packed',
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Packed`,
      },
    }),
};

export default config;
