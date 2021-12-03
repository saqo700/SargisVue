import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from "../components/TestComponent";
import auth from "../pages/auth/auth";
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/test', name: 'TestComponent', component: TestComponent},
    ...auth
  ]
})
