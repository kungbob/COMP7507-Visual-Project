import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/tableau',
    component: Layout,
    redirect: '/tableau/HKIsland',
    name: 'Example',
    meta: { title: 'Tableau Graph', icon: 'example' },
    children: [
      {
        path: 'HKIsland',
        name: 'HKIsland',
        redirect: '/tableau/HKIsland/HKIsland1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'HKIsland', icon: 'table' },
        children: [
          {
            path: 'HKIsland1',
            component: () => import('@/views/tableau/HKIsland1'),
            name: 'HKIsland 1',
            meta: { title: 'Records-HKIsland-byCandidate1', icon: 'table'  }
          },
          {
            path: 'HKIsland2',
            component: () => import('@/views/tableau/HKIsland2'),
            name: 'HKIsland 2',
            meta: { title: 'Records-HKIsland-byVote1', icon: 'table'  }
          },
          {
            path: 'HKIsland3',
            component: () => import('@/views/tableau/HKIsland3'),
            name: 'HKIsland 3',
            meta: { title: 'Records-HKIsland-byCandidate2', icon: 'table'  }
          },
          {
            path: 'HKIsland4',
            component: () => import('@/views/tableau/HKIsland4'),
            name: 'HKIsland 4',
            meta: { title: 'Records-HKIsland-byVote2', icon: 'table'  }
          },
        ]
      },
      {
        path: 'KlnWest',
        name: 'KlnWest',
        redirect: '/tableau/KlnWest/KlnWest1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'KlnWest', icon: 'table' },
        children: [
          {
            path: 'KlnWest1',
            component: () => import('@/views/tableau/KlnWest1'),
            name: 'KlnWest 1',
            meta: { title: 'Records-KlnWest-byCandidate1', icon: 'table'  }
          },
          {
            path: 'KlnWest2',
            component: () => import('@/views/tableau/KlnWest2'),
            name: 'KlnWest 2',
            meta: { title: 'Records-KlnWest-byVote1', icon: 'table'  }
          },
          {
            path: 'KlnWest3',
            component: () => import('@/views/tableau/KlnWest3'),
            name: 'KlnWest 3',
            meta: { title: 'Records-KlnWest-byCandidate2', icon: 'table'  }
          },
          {
            path: 'KlnWest4',
            component: () => import('@/views/tableau/KlnWest4'),
            name: 'KlnWest 4',
            meta: { title: 'Records-KlnWest-byVote2', icon: 'table'  }
          },
        ]
      },
      {
        path: 'KlnEast',
        name: 'KlnEast',
        redirect: '/tableau/KlnEast/KlnEast1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'KlnEast', icon: 'table' },
        children: [
          {
            path: 'KlnEast1',
            component: () => import('@/views/tableau/KlnEast1'),
            name: 'KlnEast 1',
            meta: { title: 'Records-KlnEast-byCandidate1', icon: 'table'  }
          },
          {
            path: 'KlnEast2',
            component: () => import('@/views/tableau/KlnEast2'),
            name: 'KlnEast 2',
            meta: { title: 'Records-KlnEast-byVote1', icon: 'table'  }
          },
          {
            path: 'KlnEast3',
            component: () => import('@/views/tableau/KlnEast3'),
            name: 'KlnEast 3',
            meta: { title: 'Records-KlnEast-byCandidate2', icon: 'table'  }
          },
          {
            path: 'KlnEast4',
            component: () => import('@/views/tableau/KlnEast4'),
            name: 'KlnEast 4',
            meta: { title: 'Records-KlnEast-byVote2', icon: 'table'  }
          },
        ]
      },
      {
        path: 'NTWest',
        name: 'NTWest',
        redirect: '/tableau/NTWest/NTWest1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'NTWest', icon: 'table' },
        children: [
          {
            path: 'NTWest1',
            component: () => import('@/views/tableau/NTWest1'),
            name: 'NTWest 1',
            meta: { title: 'Records-NTWest-byCandidate1', icon: 'table'  }
          },
          {
            path: 'NTWest2',
            component: () => import('@/views/tableau/NTWest2'),
            name: 'NTWest 2',
            meta: { title: 'Records-NTWest-byVote1', icon: 'table'  }
          },
          {
            path: 'NTWest3',
            component: () => import('@/views/tableau/NTWest3'),
            name: 'NTWest 3',
            meta: { title: 'Records-NTWest-byCandidate2', icon: 'table'  }
          },
          {
            path: 'NTWest4',
            component: () => import('@/views/tableau/NTWest4'),
            name: 'NTWest 4',
            meta: { title: 'Records-NTWest-byVote2', icon: 'table'  }
          },
        ]
      },
      {
        path: 'NTEast',
        name: 'NTEast',
        redirect: '/tableau/NTEast/NTEast1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'NTEast', icon: 'table' },
        children: [
          {
            path: 'NTEast1',
            component: () => import('@/views/tableau/NTEast1'),
            name: 'NTEast 1',
            meta: { title: 'Records-NTEast-byCandidate1', icon: 'table'  }
          },
          {
            path: 'NTEast2',
            component: () => import('@/views/tableau/NTEast2'),
            name: 'NTEast 2',
            meta: { title: 'Records-NTEast-byVote1', icon: 'table'  }
          },
          {
            path: 'NTEast3',
            component: () => import('@/views/tableau/NTEast3'),
            name: 'NTEast 3',
            meta: { title: 'Records-NTEast-byCandidate2', icon: 'table'  }
          },
          {
            path: 'NTEast4',
            component: () => import('@/views/tableau/NTEast4'),
            name: 'NTEast 4',
            meta: { title: 'Records-NTEast-byVote2', icon: 'table'  }
          },
        ]
      },
      {
        path: 'Comparison',
        name: 'Comparison',
        redirect: '/tableau/Comparison/Comparison1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'Comparison', icon: 'table' },
        children: [
          {
            path: 'Comparison1',
            component: () => import('@/views/tableau/Comparison1'),
            name: 'Comparison 1',
            meta: { title: 'HK Island', icon: 'table'  }
          },
          {
            path: 'Comparison2',
            component: () => import('@/views/tableau/Comparison2'),
            name: 'Comparison 2',
            meta: { title: 'Kowloon West', icon: 'table'  }
          },
          {
            path: 'Comparison3',
            component: () => import('@/views/tableau/Comparison3'),
            name: 'Comparison 3',
            meta: { title: 'Kowloon East', icon: 'table'  }
          },
          {
            path: 'Comparison4',
            component: () => import('@/views/tableau/Comparison4'),
            name: 'Comparison 4',
            meta: { title: 'NT West', icon: 'table'  }
          },
          {
            path: 'Comparison5',
            component: () => import('@/views/tableau/Comparison5'),
            name: 'Comparison 5',
            meta: { title: 'NT East', icon: 'table'  }
          },
        ]
      },
      {
        path: 'Motion',
        name: 'Motion Analytics',
        redirect: '/tableau/Motion/Motion1',
        component: () => import('@/views/tableau/index'),
        meta: { title: 'Motion Analytics', icon: 'table' },
        children: [
          {
            path: 'Motion1',
            component: () => import('@/views/tableau/Motion1'),
            name: 'Motion 1',
            meta: { title: 'HK Island', icon: 'table'  }
          },
          {
            path: 'Motion2',
            component: () => import('@/views/tableau/Motion2'),
            name: 'Motion 2',
            meta: { title: 'Kowloon West', icon: 'table'  }
          },
          {
            path: 'Motion3',
            component: () => import('@/views/tableau/Motion3'),
            name: 'Motion 3',
            meta: { title: 'Kowloon East', icon: 'table'  }
          },
          {
            path: 'Motion4',
            component: () => import('@/views/tableau/Motion4'),
            name: 'Motion 4',
            meta: { title: 'NT West', icon: 'table'  }
          },
          {
            path: 'Motion5',
            component: () => import('@/views/tableau/Motion5'),
            name: 'Motion 5',
            meta: { title: 'NT East', icon: 'table'  }
          },
        ]
      }
    ]
  },

  /*
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  */
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Questionnaire',
        component: () => import('@/views/form/index'),
        meta: { title: 'Questionnaire', icon: 'form' }
      }
    ]
  },
  /*
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },
  */

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.eac.hk/en/legco/lce.htm',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
