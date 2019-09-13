import Router from 'vue-router'
import Vue from 'vue'

import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Auth from '@/views/Auth'
import Protected from '@/views/Protected'
import NoteComponent from '@/views/Note';

import EditComponent from '@/components/note/Edit';
import CreateComponent from '@/components/note/Create';


const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/note', name: 'Note', component: NoteComponent },
  { path: '/create', name: 'Create', component: CreateComponent },
  { path: '/edit/:id', name: 'Edit', component: EditComponent },
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router