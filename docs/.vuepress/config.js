module.exports = {
    title: 'Wheels UI',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            {
              text: 'Languages',
              items: [
                { text: '主页', items:'/' },
                { text: '文档', items: '/guide/' },
                { text: '交流', items: 'https://google.com' }
              ]
            }
          ],
        sidebar: [ 
            {
                title: '新手入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
              },
              {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button'
                ]
            },
        ]
      }
  }