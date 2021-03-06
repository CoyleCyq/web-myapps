/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const myAppsRouter = {
  path: '/myApps',
  component: Layout,
  redirect: '/myApps/jjc',
  name: 'myApps',
  meta: {
    title: '我的应用',
    icon: 'table'
  },
  children: [
    {
      path: 'jjc',
      component: () => import('@/views/myApps/JJC.vue'),
      name: 'jjc',
      meta: { title: '竞技场' }
    },
    {
      path: 'nuannuan',
      component: () => import('@/views/myApps/nuannuan.vue'),
      name: 'nuannuan',
      meta: { title: '模拟抽奖' }
    },
    {
      path: 'clothes',
      component: () => import('@/views/myApps/clothes.vue'),
      name: 'clothes',
      meta: { title: '服装' }
    },
    {
      path: 'suit',
      component: () => import('@/views/myApps/suit.vue'),
      name: 'suit',
      meta: { title: '套装' }
    },
    // {
    //   path: 'evalLevelUpCost',
    //   component: () => import('@/views/myApps/evalLevelUpCost.vue'),
    //   name: 'evalLevelUpCost',
    //   meta: { title: '设计师之影计算' }
    // },
    {
      path: 'impression',
      component: () => import('@/views/myApps/impression.vue'),
      name: 'impression',
      meta: { title: '印象' }
    },
    {
      path: 'designerShadow',
      component: () => import('@/views/myApps/designerShadow.vue'),
      name: 'designerShadow',
      meta: { title: '设计师之影' }
    },
    {
      path: 'collection',
      component: () => import('@/views/myApps/collection.vue'),
      name: 'collection',
      meta: { title: '馆藏' }
    },
    {
      path: 'country',
      component: () => import('@/views/myApps/country.vue'),
      name: 'country',
      meta: { title: '国家' }
    },
    {
      path: 'editJoomListing',
      component: () => import('@/views/myApps/editJoomListing/index.vue'),
      name: 'editJoomListing',
      meta: { title: '编辑JoomListing' }
    }
    // {
    //   path: 'alliance',
    //   component: () => import('@/views/myApps/alliance.vue'),
    //   name: 'alliance',
    //   meta: { title: '联盟计分' }
    // }
  ]
}
export default myAppsRouter
