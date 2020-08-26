<template>
  <div id="app">
        <!-- <head-index></head-index>
     <body-index></body-index>
     <book-appointment  v-on:updateDetails="detailsUpdated($event)"></book-appointment>
     <view-appointment v-bind:details="details"></view-appointment>                                          
     <doctors></doctors>
     <view-doctors></view-doctors>
     {{ details }} -->
  <!-- {{ uuidv4() }} -->
    <router-view/>
  </div>
</template>

<script>

 import Home from '../src/components/Home.vue'
 
 import BookAppointment from '../src/components/BookAppointment.vue'
import ViewAppointment from '../src/components/ViewAppointment.vue'
// import Doctors from '../src/components/Doctors.vue'
// import ViewDoctors from '../src/components/ViewDoctors.vue'
 
// import from ''



export default {
  name: 'App',
  components: {
  'head-index': Home,

  'book-appointment': BookAppointment,
  'view-appointment': ViewAppointment
  // 'doctors': Doctors,
  // 'view-doctors': ViewDoctors
 
},

  data () {
    return {
 
        details: []
   
      }
     
  },
  methods: {
    detailsUpdated (updated) {
      this.details = updated
    console.log(updated)
    }
  } 
}
</script>

<style>
    body {
        font-family: 'Poppins'
    }
   
    div.doctors {
        
        display: inline-block;
        /* border-radius: 5px; */
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
       
    }
    div .card.card-display {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      height: 25em;
    }
     div .card-display .card-body {
       background-color:rgb(234, 242, 255)
    }
  .search-container {
    position: absolute;
    top: 55px;
    left: 15.8em;
    width: 13em;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 1;
   
  }

    div.search {
      border-bottom: 1px solid black;
   transition: all 0.2s ease-in-out;
    
    
    /* display: inline-block; */
    }
    div.search:hover {
      transform: scale(1.1, 1.1);
    }
   
    .form-shadow {
        padding: 30px;
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19),  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
     .navbar-nav li {
      display: inline-block;
      color: black;
      margin-left: 10px;
      font-weight: 600;
      padding: 5px;
     
  }
   .navbar-nav li:last-child {
      color: white;
      background-image: -webkit-linear-gradient(left, #fefeff 0%, #ffffff 100%);
      padding: 5px;
      border-radius: 100px;
      box-shadow: 0 10px 20px rgba(8, 112, 184, 0.4);
  }
  .router-link-active {
      border-bottom: 1px solid black;
      background-color: rgb(234, 242, 255);
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      padding: 10px;
  }
</style>









