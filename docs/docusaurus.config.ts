import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ottotest Documentation',
  tagline: 'Streamline QA with an All-in-One AI-Powered Test Automation Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Custom domain (not /<repo>/)
  url: 'https://docs.ottotests.ai',
  baseUrl: '/',

  // GitHub Pages deployment
  organizationName: 'zealous-tech',
  projectName: 'ottotest-docs-public',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/zealous-tech/ottotest-docs-public/tree/main/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl: 'https://github.com/zealous-tech/ottotest-docs-public/tree/main/docs/',
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ottotest Docs',
      // logo: {
      //   alt: 'Ottotest',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Test Generation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Test Automation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Test Execution',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Test Auto-healing',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Test Management',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/zealous-tech/ottotest-docs-public',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Intro', to: '/docs/intro'},
          ]
        },
        // {
        //   title: 'More',
        //   items: [
        //     {label: 'Blog', to: '/blog'},
        //     {label: 'GitHub', href: 'https://github.com/zealous-tech/ottotest-docs-public'},
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://zealous.tech" target="_blank">zealous.tech</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;