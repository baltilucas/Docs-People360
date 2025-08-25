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
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
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
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '40b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2b2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2d7'),
            routes: [
              {
                path: '/docs/category/modulo-de-actualización',
                component: ComponentCreator('/docs/category/modulo-de-actualización', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/modulo-de-adaptación',
                component: ComponentCreator('/docs/category/modulo-de-adaptación', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/modulo-de-desacople',
                component: ComponentCreator('/docs/category/modulo-de-desacople', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/modulo-de-inicialización',
                component: ComponentCreator('/docs/category/modulo-de-inicialización', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Actualización/manage-docs-versions',
                component: ComponentCreator('/docs/Modulo de Actualización/manage-docs-versions', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Actualización/translate-your-site',
                component: ComponentCreator('/docs/Modulo de Actualización/translate-your-site', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/congratulations',
                component: ComponentCreator('/docs/Modulo de Adaptación/congratulations', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/create-a-blog-post',
                component: ComponentCreator('/docs/Modulo de Adaptación/create-a-blog-post', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/create-a-document',
                component: ComponentCreator('/docs/Modulo de Adaptación/create-a-document', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/create-a-page',
                component: ComponentCreator('/docs/Modulo de Adaptación/create-a-page', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/deploy-your-site',
                component: ComponentCreator('/docs/Modulo de Adaptación/deploy-your-site', '899'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Adaptación/markdown-features',
                component: ComponentCreator('/docs/Modulo de Adaptación/markdown-features', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Desacople/manage-docs-versions',
                component: ComponentCreator('/docs/Modulo de Desacople/manage-docs-versions', 'eda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Desacople/translate-your-site',
                component: ComponentCreator('/docs/Modulo de Desacople/translate-your-site', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Modulo de Inicialización/AWS/manage-docs-versions',
                component: ComponentCreator('/docs/Modulo de Inicialización/AWS/manage-docs-versions', '95f'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
