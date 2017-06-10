import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Routes from '@/components/Routes'
// import Hello from '@/components/Hello'
// import Text from '@/components/Text'
// import VOnce from '@/components/VOnce'
// import PureHtml from '@/components/PureHtml'
// import Bind from '@/components/Bind'
// import JsExpression from '@/components/JsExpression'
// import Filter from '@/components/Filter'
// import FilterAndBind from '@/components/FilterAndBind'
// import ArrayRender from '@/components/ArrayRender'
import TemplateVFor from '@/components/TemplateVFor'
import VForObject from '@/components/VForObject'
import ZhihuDaily from '@/components/ZhihuDaily'
import ComponentVFor from '@/components/ComponentVFor'
import FilterAndOrder from '@/components/FilterAndOrder'

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Routes',
      component: Routes
    },
      {
          path: '/template-v-for',
          name: 'TemplateVFor',
          component: TemplateVFor,
      },
      {
          path: '/v-for-object',
          name: 'VForObject',
          component: VForObject
      },
      {
          path: '/zhihu-daily',
          component: ZhihuDaily
      },
      {
          path: '/component-v-for',
          component: ComponentVFor
      },
      {
          path: '/filter-and-order',
          component: FilterAndOrder
      }
  ]
})
