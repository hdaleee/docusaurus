
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','6e6'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','ae4'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','603'),
  exact: true,
},
{
  path: '/blog/milki',
  component: ComponentCreator('/blog/milki','2ae'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','899'),
  exact: true,
},
{
  path: '/blog/tags/cat',
  component: ComponentCreator('/blog/tags/cat','7fe'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','3c8'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','5ba'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','9d1'),
  exact: true,
},
{
  path: '/blog/tags/publ',
  component: ComponentCreator('/blog/tags/publ','597'),
  exact: true,
},
{
  path: '/blog/tags/zip-sa',
  component: ComponentCreator('/blog/tags/zip-sa','c72'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','512'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','87d'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','398'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
