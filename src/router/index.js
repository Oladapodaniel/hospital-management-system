import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookAppointment from '@/components/BookAppointment'
import Doctors from '@/components/Doctors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book-appointment',
      name: 'BookAppointment',
      component: BookAppointment
    },
    {
      path: '/doctors',
      name: 'Doctors',
      component: Doctors
    }
  ],
  mode: 'history'
})
