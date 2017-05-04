import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Text',
      component: Text
    }
  ]
})
