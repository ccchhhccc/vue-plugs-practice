import Vue from 'vue'
import Router from 'vue-router'
const Home = {
  template: `
    <div class="home">
      <h2>Home</h2>
      <p>hello</p>
    </div>
  `
}

const Parent = {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  `
}

const Default = { template: '<div class="default">default</div>' }
const Foo = { template: '<div class="foo">foo</div>' }
const Bar = { template: '<div class="bar">bar</div>' }
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/parent', component: Parent,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar }
      ]
    }
  ]
})