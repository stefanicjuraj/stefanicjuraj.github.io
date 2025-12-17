import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b13'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '1a1'),
        routes: [
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
