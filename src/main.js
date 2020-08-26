// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Bootstrap from '../node_modules/bootstrap'
import VueResource from 'vue-resource'
// import UUID from './uuidv4'

// import $ from 'jquery'
// // import $ from '../node_modules/jquery/dist/jquery.min.js'
// import JQuery from '../node_modules/jquery/dist/jquery.min.js'





// import '../node_modules/popper.js/dist/popper.min.js'
// import '../node_modules/jquery/dist/jquery.min.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// import App from './App.vue'

// Vue.directive('rainbow', {
//   bind (el, bind, vnode) {
//     return el.style.color = '#' + Math.random().toString().slice(2, 8)
//   }
//  })


// Vue.use($)
// Vue.use(JQuery)
Vue.use(VueResource)
// Vue.use(UUID)


Vue.config.productionTip = false




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
