import Vue from 'vue';
import Router from 'vue-router';
import Home from '../features/home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../features/recipes/index')
    }
  ]
});

export default router;
