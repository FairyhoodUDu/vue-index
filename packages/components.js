export default [
  {
    name: '布局组件',
    child: [
      {
        name: '区块容器',
        component: 'area-wrap',
        container: true
      }
    ]
  },
  {
    name: '功能组件',
    child: [
      {
        name: '文章列表',
        component: 'art-list'
      },
      {
        name: '搜索框',
        component: 'search'
      },
      {
        name: '轮播',
        component: 'banner'
      }
    ]
  },
  {
    name: '辅助组件',
    child: [
      {
        name: '辅助空白',
        component: 'white-space'
      }
    ]
  }
]
