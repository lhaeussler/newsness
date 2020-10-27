import Vue from 'vue'
import Router from 'vue-router'
import menu from "../components/menu";
import socials from "../components/socials";
import footer from "../components/footer"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/',
      name: 'socials',
      component: socials
    },
    {
      path: '/',
      name: 'footer',
      component: footer
    }
  ]
})
