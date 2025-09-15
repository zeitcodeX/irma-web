// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Recursos de IRMA',
  tagline: 'Documentación, guías y artículos para sacar el máximo provecho a IRMA.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://holairma.com',
  baseUrl: '/recursos/',

  organizationName: 'holairma',
  projectName: 'docs_irma',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'documentacion',
          // --- CAMBIO AQUÍ: La línea 'editUrl' fue eliminada por completo ---
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card-irma.png',
      navbar: {
        title: '',
        logo: {
          alt: 'IRMA Docs',
          src: 'img/light.svg',
          srcDark: 'img/dark.svg',
        },
        items: [
          {
            to: '/documentacion',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://holairma.com',
            label: 'IRMA Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              { label: 'Documentación', to: '/documentacion' },
            ],
          },
          {
            title: 'Soporte',
            items: [
              { label: 'Centro de Ayuda', href: 'https://wa.me/5491171004451' },
              { label: 'Contacto', href: 'mailto:contacto@holairma.com' },
            ],
          },
          {
            title: 'Empresa',
            items: [
              { label: 'Términos', href: 'https://holairma.com/terminos.html' },
              { label: 'Privacidad', href: 'https://holairma.com/privacidad.html' },
            ],
          },
          {
            title: 'Seguinos',
            items: [
              { label: 'Instagram', href: 'https://www.instagram.com/holairma' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/holairma' },
            ],
          },
        ],
        logo: {
          alt: 'IRMA Logo Blanco',
          src: 'img/logo-irma-blanco.svg',
          href: 'https://holairma.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} IRMA. Todos los derechos reservados. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;