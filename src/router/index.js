import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Text from '@/components/Text'
// import VOnce from '@/components/VOnce'
// import PureHtml from '@/components/PureHtml'
// import Bind from '@/components/Bind'
import JsExpression from '@/components/JsExpression'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JsExpression',
      component: JsExpression
    }
  ]
})
