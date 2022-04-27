import { menus } from './hooks';

const packages = require('../packages/hooks/package.json');

export default {
  // ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'surveyking',
  favicon: '/logo.png',
  logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: {
    'zh-CN': [
      { title: '指南', path: '/zh-CN/guide' },
      { title: 'Hooks', path: '/zh-CN/hooks' },
    ],
    'en-US': [
      { title: 'Guide', path: '/guide' },
      { title: 'Hooks', path: '/hooks' },
    ],
  },
  menus: {
    // 首页
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/zh-CN': [
      {
        title: '首页',
        path: 'index',
      },
    ],

    // 指南
    '/guide': [
      {
        title: 'Intro',
        path: '/guide',
      },
      {
        title: 'Blog',
        children: [
          {
            title: 'ahooks function specification',
            path: '/guide/blog/function',
          },
        ],
      },
    ],
    '/zh-CN/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
      {
        title: 'Blog',
        children: [
          {
            title: 'ahooks 输入输出函数处理规范',
            path: '/zh-CN/guide/blog/function',
          },
        ],
      },
    ],

    // 组件
    '/hooks': menus,
    '/zh-CN/hooks': menus,
  },
  scripts: [
    'https://s4.cnzz.com/z_stat.php?id=1278992092&web_id=1278992092',
    `
    const insertVersion = function(){
      const dom = document.createElement('span');
      dom.id = 'logo-version';
      dom.innerHTML = '${packages.version}';
      const logo = document.querySelector('.__dumi-default-navbar-logo');
      if(logo){
        logo.parentNode.insertBefore(dom, logo.nextSibling);
      }else{
        setTimeout(()=>{
          insertVersion();
        }, 1000)
      }
    }
    insertVersion();
    `,
  ],
};
