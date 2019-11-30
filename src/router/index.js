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
    path: '/candidates',
    component: Layout,
    redirect: '/candidates/HKIsland',
    name: 'Candidates',
    meta: { title: 'Candidates Information', icon: 'example' },
    children: [
      {
        path: 'HKIsland',
        name: 'HKIsland',
        redirect: '/candidates/HKIsland/HKIsland1',
        component: () => import('@/views/Candidates/index'),
        meta: { title: 'Hong Kong Island', icon: 'table' },
        children: [
          {
            path: 'HKIsland1',
            component: () => import('@/views/Candidates/ChanTanya'),
            name: 'HKIsland Candidate 1',
            meta: { title: 'Chan Tanya', icon: 'table'  }
          },
          {
            path: 'HKIsland2',
            component: () => import('@/views/Candidates/HuiChiFung'),
            name: 'HKIsland Candidate 2',
            meta: { title: 'Hui Chi Fung', icon: 'table'  }
          },
          {
            path: 'HKIsland3',
            component: () => import('@/views/Candidates/IpLauSukYeeRegina'),
            name: 'HKIsland Candidate 3',
            meta: { title: 'Ip Lau Suk Yee Regina', icon: 'table'  }
          },
          {
            path: 'HKIsland4',
            component: () => import('@/views/Candidates/KwokWaiKeung'),
            name: 'HKIsland Candidate 4',
            meta: { title: 'Kwok Wai Keung', icon: 'table'  }
          },
        ]
      },
      {
        path: 'KlnWest',
        name: 'KlnWest',
        redirect: '/candidates/KlnWest/KlnWest1',
        component: () => import('@/views/Candidates/index'),
        meta: { title: 'KlnWest', icon: 'table' },
        children: [
          {
            path: 'KlnWest1',
            component: () => import('@/views/Candidates/ChiangLaiWan'),
            name: 'KlnWest Candidate 1',
            meta: { title: 'Chiang Lai Wan', icon: 'table'  }
          },
          {
            path: 'KlnWest2',
            component: () => import('@/views/Candidates/LeungMeiFun'),
            name: 'KlnWest Candidate 2',
            meta: { title: 'Leung Mei Fun', icon: 'table'  }
          },
          {
            path: 'KlnWest3',
            component: () => import('@/views/Candidates/MoManChingClaudia'),
            name: 'KlnWest Candidate 3',
            meta: { title: 'Mo Man Ching Claudia', icon: 'table'  }
          },
          {
            path: 'KlnWest4',
            component: () => import('@/views/Candidates/WongPikWanHelena'),
            name: 'KlnWest Candidate 4',
            meta: { title: 'Wong Pik Wan Helena', icon: 'table'  }
          },
        ]
      },
      {
        path: 'KlnEast',
        name: 'KlnEast',
        redirect: '/candidates/KlnEast/KlnEast1',
        component: () => import('@/views/Candidates/index'),
        meta: { title: 'KlnEast', icon: 'table' },
        children: [
          {
            path: 'KlnEast1',
            component: () => import('@/views/Candidates/TamManHoJeremyJansen'),
            name: 'KlnEast Candidate 1',
            meta: { title: 'Tam Man Ho Jeremy Jansen', icon: 'table'  }
          },
          {
            path: 'KlnEast2',
            component: () => import('@/views/Candidates/TseWaiChunPaul'),
            name: 'KlnEast Candidate 2',
            meta: { title: 'Tse Wai Chun Paul', icon: 'table'  }
          },
          {
            path: 'KlnEast3',
            component: () => import('@/views/Candidates/WongKwokKin'),
            name: 'KlnEast Candidate 3',
            meta: { title: 'Wong Kwok Kin', icon: 'table'  }
          },
          {
            path: 'KlnEast4',
            component: () => import('@/views/Candidates/WuChiWai'),
            name: 'KlnEast Candidate 4',
            meta: { title: 'Wu Chi Wai', icon: 'table'  }
          },
        ]
      },
      {
        path: 'NTWest',
        name: 'NTWest',
        redirect: '/candidates/NTWest/NTWest1',
        component: () => import('@/views/Candidates/index'),
        meta: { title: 'NTWest', icon: 'table' },
        children: [
          {
            path: 'NTWest1',
            component: () => import('@/views/Candidates/ChengChungTai'),
            name: 'NTWest Candidate 1',
            meta: { title: 'Cheng Chung Tai', icon: 'table'  }
          },
          {
            path: 'NTWest2',
            component: () => import('@/views/Candidates/ChuHoiDickEddie'),
            name: 'NTWest Candidate 2',
            meta: { title: 'Chu Hoi Dick Eddie', icon: 'table'  }
          },
          {
            path: 'NTWest3',
            component: () => import('@/views/Candidates/LeungCheCheung'),
            name: 'NTWest Candidate 3',
            meta: { title: 'Leung Che Cheung', icon: 'table'  }
          },
          {
            path: 'NTWest4',
            component: () => import('@/views/Candidates/TienMichaelPukSun'),
            name: 'NTWest Candidate 4',
            meta: { title: 'Tien Michael Puk Sun', icon: 'table'  }
          },
        ]
      },
      {
        path: 'NTEast',
        name: 'NTEast',
        redirect: '/candidates/NTEast/NTEast1',
        component: () => import('@/views/Candidates/index'),
        meta: { title: 'NTEast', icon: 'table' },
        children: [
          {
            path: 'NTEast1',
            component: () => import('@/views/Candidates/ChanChiChuenRaymond'),
            name: 'NTEast 1',
            meta: { title: 'Chan Chi Chuen Raymond', icon: 'table' }
          },
          {
            path: 'NTEast2',
            component: () => import('@/views/Candidates/CheungChiuHung'),
            name: 'NTEast 2',
            meta: { title: 'Cheung Chiu Hung', icon: 'table' }
          },
          {
            path: 'NTEast3',
            component: () => import('@/views/Candidates/QuatElizabeth'),
            name: 'NTEast 3',
            meta: { title: 'Quat Elizabeth', icon: 'table' }
          },
          {
            path: 'NTEast4',
            component: () => import('@/views/Candidates/YeungAlvinNgokKiu'),
            name: 'NTEast 4',
            meta: { title: 'Yeung Alvin Ngok Kiu', icon: 'table' }
          },
        ]
      }
    ]
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
        meta: { title: 'Hong Kong Island', icon: 'table' },
        children: [
          {
            path: 'HKIsland1',
            component: () => import('@/views/tableau/HKIsland1'),
            name: 'HKIsland 1',
            meta: { title: '2016 Election Votes', icon: 'table'  }
          },
          {
            path: 'HKIsland2',
            component: () => import('@/views/tableau/HKIsland2'),
            name: 'HKIsland 2',
            meta: { title: 'LegCo Attendance', icon: 'table'  }
          },
          {
            path: 'HKIsland3',
            component: () => import('@/views/tableau/HKIsland3'),
            name: 'HKIsland 3',
            meta: { title: 'LegCo Motions Votes', icon: 'table'  }
          },
          {
            path: 'HKIsland4',
            component: () => import('@/views/tableau/HKIsland4'),
            name: 'HKIsland 4',
            meta: { title: 'LegCo Voting Summary', icon: 'table'  }
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
            meta: { title: '2016 Election Votes', icon: 'table'  }
          },
          {
            path: 'KlnWest2',
            component: () => import('@/views/tableau/KlnWest2'),
            name: 'KlnWest 2',
            meta: { title: 'LegCo Attendance', icon: 'table'  }
          },
          {
            path: 'KlnWest3',
            component: () => import('@/views/tableau/KlnWest3'),
            name: 'KlnWest 3',
            meta: { title: 'LegCo Motions Votes', icon: 'table'  }
          },
          {
            path: 'KlnWest4',
            component: () => import('@/views/tableau/KlnWest4'),
            name: 'KlnWest 4',
            meta: { title: 'LegCo Voting Summary', icon: 'table'  }
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
            meta: { title: '2016 Election Votes', icon: 'table'  }
          },
          {
            path: 'KlnEast2',
            component: () => import('@/views/tableau/KlnEast2'),
            name: 'KlnEast 2',
            meta: { title: 'LegCo Attendance', icon: 'table'  }
          },
          {
            path: 'KlnEast3',
            component: () => import('@/views/tableau/KlnEast3'),
            name: 'KlnEast 3',
            meta: { title: 'LegCo Motions Votes', icon: 'table'  }
          },
          {
            path: 'KlnEast4',
            component: () => import('@/views/tableau/KlnEast4'),
            name: 'KlnEast 4',
            meta: { title: 'LegCo Voting Summary', icon: 'table'  }
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
            meta: { title: '2016 Election Votes', icon: 'table'  }
          },
          {
            path: 'NTWest2',
            component: () => import('@/views/tableau/NTWest2'),
            name: 'NTWest 2',
            meta: { title: 'LegCo Attendance', icon: 'table'  }
          },
          {
            path: 'NTWest3',
            component: () => import('@/views/tableau/NTWest3'),
            name: 'NTWest 3',
            meta: { title: 'LegCo Motions Votes', icon: 'table'  }
          },
          {
            path: 'NTWest4',
            component: () => import('@/views/tableau/NTWest4'),
            name: 'NTWest 4',
            meta: { title: 'LegCo Voting Summary', icon: 'table'  }
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
            meta: { title: '2016 Election Votes', icon: 'table'  }
          },
          {
            path: 'NTEast2',
            component: () => import('@/views/tableau/NTEast2'),
            name: 'NTEast 2',
            meta: { title: 'LegCo Attendance', icon: 'table'  }
          },
          {
            path: 'NTEast3',
            component: () => import('@/views/tableau/NTEast3'),
            name: 'NTEast 3',
            meta: { title: 'LegCo Motions Votes', icon: 'table'  }
          },
          {
            path: 'NTEast4',
            component: () => import('@/views/tableau/NTEast4'),
            name: 'NTEast 4',
            meta: { title: 'LegCo Voting Summary', icon: 'table'  }
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
