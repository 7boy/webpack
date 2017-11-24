/**
 * Created by 7coder on 2017/11/24.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function view (path) {
  return resolve => require([`./views/${path}.vue`], resolve)
}

const router = new Router({
  routes: [
    {path: '/', name: 'Home', component: view('Home')},
    {path: '*', redirect: {name: 'Home'}}]
})

export default router
