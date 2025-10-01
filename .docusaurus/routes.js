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
    component: ComponentCreator('/docs', '747'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c07'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3df'),
            routes: [
              {
                path: '/docs/category/configuraciones',
                component: ComponentCreator('/docs/category/configuraciones', 'b2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/módulo-de-actualización',
                component: ComponentCreator('/docs/category/módulo-de-actualización', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/módulo-de-adaptación',
                component: ComponentCreator('/docs/category/módulo-de-adaptación', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/módulo-de-desacople',
                component: ComponentCreator('/docs/category/módulo-de-desacople', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/módulo-de-inicialización',
                component: ComponentCreator('/docs/category/módulo-de-inicialización', '53b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/módulos',
                component: ComponentCreator('/docs/category/módulos', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Configuracions/configuracion-dynamo',
                component: ComponentCreator('/docs/Configuracions/configuracion-dynamo', 'ece'),
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
                path: '/docs/Módulos/Modulo de Actualización/manage-docs-versions',
                component: ComponentCreator('/docs/Módulos/Modulo de Actualización/manage-docs-versions', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Actualización/translate-your-site',
                component: ComponentCreator('/docs/Módulos/Modulo de Actualización/translate-your-site', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/congratulations',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/congratulations', '3cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/create-a-blog-post',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/create-a-blog-post', '3c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/create-a-document',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/create-a-document', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/create-a-page',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/create-a-page', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/deploy-your-site',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/deploy-your-site', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Adaptación/markdown-features',
                component: ComponentCreator('/docs/Módulos/Modulo de Adaptación/markdown-features', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Desacople/context',
                component: ComponentCreator('/docs/Módulos/Modulo de Desacople/context', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Desacople/database',
                component: ComponentCreator('/docs/Módulos/Modulo de Desacople/database', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Desacople/file',
                component: ComponentCreator('/docs/Módulos/Modulo de Desacople/file', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Desacople/overview',
                component: ComponentCreator('/docs/Módulos/Modulo de Desacople/overview', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Desacople/registry',
                component: ComponentCreator('/docs/Módulos/Modulo de Desacople/registry', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Inicialización/dynamodb',
                component: ComponentCreator('/docs/Módulos/Modulo de Inicialización/dynamodb', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Inicialización/overview',
                component: ComponentCreator('/docs/Módulos/Modulo de Inicialización/overview', 'fad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Inicialización/secretsmanager',
                component: ComponentCreator('/docs/Módulos/Modulo de Inicialización/secretsmanager', 'ead'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Módulos/Modulo de Inicialización/stepfunctions',
                component: ComponentCreator('/docs/Módulos/Modulo de Inicialización/stepfunctions', 'c43'),
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
