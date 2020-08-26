<template>
  <div id="app">
       <div class="container">
           <table class="striped">
               <thead>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Email</th>
                       <th>Phone Number</th>
                       <th>Service</th>
                       <th>Message</th>
                   </tr>
                    </thead>
                   <tbody>
                      <tr v-for="detail in details">
                          <td>{{ detail.firstName }}</td>
                          <td>{{ detail.lastName }}</td>
                          <td>{{ detail.email }}</td>
                          <td>{{ detail.phoneNumber }}</td>
                          <td>{{ detail.service }}</td>
                          <td>{{ detail.message }}</td>
                      </tr>
                       
                   </tbody>
              
           </table>
       </div> 

  </div>
</template>

<script>
// import { bus } from '../main'

export default {
  props: ['details'],
  data () {
    return {
        // details2: {
             firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
        }
       
    // }
  },
  methods: {
  
  }
//   created () {
//       bus.$on('valueChanged', (data) => {
//         this.details = data
        
//       })
//   }
}




</script>
<style>

</style>
