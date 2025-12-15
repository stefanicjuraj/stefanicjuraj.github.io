import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '521'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/jurajstefanic',
    component: ComponentCreator('/blog/authors/jurajstefanic', 'ac5'),
    exact: true
  },
  {
    path: '/blog/benchmarking-docusaurus-openapi-plugin',
    component: ComponentCreator('/blog/benchmarking-docusaurus-openapi-plugin', '459'),
    exact: true
  },
  {
    path: '/blog/em-dash-en-dash-or-hyphen',
    component: ComponentCreator('/blog/em-dash-en-dash-or-hyphen', '01f'),
    exact: true
  },
  {
    path: '/blog/modern-web-applications',
    component: ComponentCreator('/blog/modern-web-applications', '5d8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '91b'),
    exact: true
  },
  {
    path: '/blog/the-cost-of-not-opening-your-editor',
    component: ComponentCreator('/blog/the-cost-of-not-opening-your-editor', '356'),
    exact: true
  },
  {
    path: '/blog/vibe-coding',
    component: ComponentCreator('/blog/vibe-coding', '4e0'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '524'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ccd'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/changelog',
            component: ComponentCreator('/tags/changelog', 'bc9'),
            exact: true
          },
          {
            path: '/tags/deno',
            component: ComponentCreator('/tags/deno', 'f24'),
            exact: true
          },
          {
            path: '/tags/documentation',
            component: ComponentCreator('/tags/documentation', '9e6'),
            exact: true
          },
          {
            path: '/tags/json',
            component: ComponentCreator('/tags/json', 'cef'),
            exact: true
          },
          {
            path: '/tags/markdown',
            component: ComponentCreator('/tags/markdown', '6c6'),
            exact: true
          },
          {
            path: '/tags/minecraft',
            component: ComponentCreator('/tags/minecraft', 'ed9'),
            exact: true
          },
          {
            path: '/tags/project',
            component: ComponentCreator('/tags/project', 'c42'),
            exact: true
          },
          {
            path: '/tags/vscode',
            component: ComponentCreator('/tags/vscode', 'ad2'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '590'),
            routes: [
              {
                path: '/now',
                component: ComponentCreator('/now', '280'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/',
                component: ComponentCreator('/projects/', '796'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/better-markdown-tables',
                component: ComponentCreator('/projects/better-markdown-tables', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/changelog-world',
                component: ComponentCreator('/projects/changelog-world', '298'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/docs2llms',
                component: ComponentCreator('/projects/docs2llms', '600'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/it-croatia',
                component: ComponentCreator('/projects/it-croatia', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/json-visualizer',
                component: ComponentCreator('/projects/json-visualizer', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/markdown-commands',
                component: ComponentCreator('/projects/markdown-commands', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/skillsets',
                component: ComponentCreator('/projects/skillsets', '69b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/smart-search',
                component: ComponentCreator('/projects/smart-search', '345'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/techbook',
                component: ComponentCreator('/projects/techbook', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/techwordoftheday',
                component: ComponentCreator('/projects/techwordoftheday', 'e2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/uhc',
                component: ComponentCreator('/projects/uhc', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects/whentopostonline',
                component: ComponentCreator('/projects/whentopostonline', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work',
                component: ComponentCreator('/work', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
