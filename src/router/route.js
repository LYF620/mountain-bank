import Layout from 'src/pages/layout/layout';
// 不作为main组件子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('src/pages/login/login')
};

export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: 'Register - 注册'
  },
  component: () => import('src/pages/register/register')
};

// 错误页面
export const errorRouter = {
  path: '/error/:code',
  name: 'error',
  meta: {
    title: 'error'
  },
  component: () =>
    import('src/pages/error/index')
};

export const userrouter = {
  path: '/userLayout',
  name: 'userrouter',
  meta: {
    title: '用户页面'
  },
  component: () => import('src/pages/userLayout/user.vue')
};

export const userhomerouter = {
  path: '/userhome',
  name: 'userotherrouter',
  redirect: '/userhome',
  meta: {
    requireAuth: true
  },
  component: () => import('src/pages/userLayout/user.vue'),
  children: [
    {
      path: '/userhome',
      name: '/userhome',
      title: '用户首页',
      component: () => import('src/pages/userhome/userhome')
    }
  ]
};
export const userformrouter = {
  path: '/userform',
  name: 'userformrouter',
  redirect: '/userform',
  meta: {
    requireAuth: true
  },
  component: () => import('src/pages/userLayout/user.vue'),
  children: [
    {
      path: '/userform/render',
      name: '/userform/render',
      title: '考勤系统',
      component: () => import('src/pages/userform/render/render')
    },
    {
      path: '/userform/render_select',
      name: '/userform/render_select',
      title: '个人考勤查询',
      component: () => import('src/pages/userform/render/render_select')
    }
  ]
};
export const userlogrouter = {
  path: '/userlog',
  name: 'userlogrouter',
  redirect: '/userlog',
  meta: {
    requireAuth: true
  },
  component: () => import('src/pages/userLayout/user.vue'),
  children: [
    {
      path: '/userlog/index',
      name: '/userlog/index',
      title: '操作日志',
      component: () => import('src/pages/userlog/index')
    }
  ]
};
export const usermanagerouter = {
  path: '/usermanage',
  name: 'userotherrouter',
  redirect: '/usermanage',
  meta: {
    requireAuth: true
  },
  component: () => import('src/pages/userLayout/user.vue'),
  children: [
    {
      path: '/usermanage',
      name: '/usermanage',
      title: '个人信息管理',
      component: () => import('src/pages/usermanage/index')
    }
  ]
};
export const usersystemrouter = {
  path: '/usersystem',
  name: 'usersystemrouter',
  redirect: '/usersystem',
  meta: {
    requireAuth: true
  },
  component: () => import('src/pages/userLayout/user.vue'),
  children: [
    {
      path: '/usersystem/index',
      name: '/usersystem/index',
      component: () => import('src/pages/usersystem/index/index')
    },
    {
      path: '/usersystem/mession',
      name: '/usersystem_mession',
      component: () => import('src/pages/usersystem/index/mession')
    }
  ]
};


// 作为main组件子页面展示  但不在左侧菜单显示的路由写在otherRoter里
export const otherRouter = {
  path: '',
  name: 'otherRouter',
  redirect: '/home',
  meta: {
    requireAuth: true
  },
  component: Layout,
  children: [
    {
      path: 'home',
      name: 'home',
      title: '首页',
      component: () => import('src/pages/home/home')
    }
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/tables',
    name: 'tables',
    title: '员工管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'basic',
        name: 'basic',
        title: '存款员工',
        component: () => import('src/pages/tables/basic')
      },
      {
        path: 'sort',
        name: 'sort',
        title: '贷款员工',
        component: () => import('src/pages/tables/sort')
      },
      {
        path: 'filter',
        name: 'filter',
        title: '理财员工',
        component: () => import('src/pages/tables/filter')
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    title: '个人管理',
    mata: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'manage_index',
        title: '个人管理',
        component: () => import('src/pages/manage/index')
      }
    ]
  },
  {
    path: '/charts',
    name: 'charts',
    title: 'echarts图表',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'bar',
        name: 'bar',
        title: '柱状图',
        component: () => import('src/pages/charts/bar')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    title: '考勤管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'render',
        name: 'render',
        title: '考勤系统',
        component: () => import('src/pages/form/render/render')
      },
      {
        path: 'render_select',
        name: 'render_select',
        title: '个人考勤查询',
        component: () => import('src/pages/form/render/render_select')
      }
    ]
  },
  // {
  //   path: '/system',
  //   name: 'system',
  //   title: '任务管理',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'system_index',
  //       component: () => import('src/pages/system/index/index')
  //     },
  //     {
  //       path: 'mession',
  //       name: 'system_mession',
  //       component: () => import('src/pages/system/index/mession')
  //     }
  //   ]
  // },
  {
    path: '/user',
    name: 'user',
    title: '用户管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'user_index',
        title: '用户管理',
        component: () => import('src/pages/user/index')
      }
    ]
  },
  {
    path: '/access',
    name: 'access',
    title: '权限管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'access_index',
        title: '权限管理',
        component: () => import('src/pages/access/index')
      }
    ]
  },
  {
    path: '/log',
    name: 'log',
    title: '日志管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'log_index',
        title: '操作日志',
        component: () => import('src/pages/log/index')
      }
    ]
  }
];

export const routers = [
  loginRouter,
  registerRouter,
  userrouter,
  userhomerouter,
  userformrouter,
  userlogrouter,
  usermanagerouter,
  usersystemrouter,
  errorRouter,
  otherRouter,
  ...appRouter
];
