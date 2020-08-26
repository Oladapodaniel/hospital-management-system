<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="..\assets\images\logo.png"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                          <router-link class="nav-link" to="/" exact>Home <span class="sr-only">(current)</span></router-link>
                      </li>
                      <!-- <li class="nav-item">
                          <router-link class="nav-link" to="/doctors">About</router-link>
                      </li> -->
                      <li class="nav-item">
                          <router-link class="nav-link" to="/doctors" exact>Doctors</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="nav-link" to="/book-appointment" exact>Book Appointment</router-link>
                      </li>
                  </ul>
             </div>
              </div>
              
         </nav>
         <div>
             <img src="../assets/images/hero.jpg" width="100%" height="auto">
         </div>
      
       <div class="container">
          <div class="row">
              <div class="col-sm-6 medical-service">
                  <h1>The Best Medical Services</h1>
                   <p>Everyday we bring hope and smile to the patient we serve.
                      You health is our priority with comprehensive and affordable.
                  </p>
              </div>
          </div>
<!--           
          <div class="row">
            <div class="col-sm-12 col-md-4">
                
                <div class="card">
                    <div class="card-body text-center">
                    <img src="../assets/images/doctors.png">                       
                    <p>Qualified Doctors
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div class="card-footer center">
                    <a href="#" class="waves-effect waves-light btn #1976d2 blue darken-2">Read More...</a>
                    </div>
                </div>
            </div>

     <div class="col-sm-12 col-md-4">
      <div class="card">
        <div class="card-body center">
             <img src="../assets/images/doctors.png"> 
          <p>24 Hours Service
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div class="card-footer center">
          <a href="#" class="waves-effect waves-light btn #1976d2 blue darken-2">Read More...</a>
        </div>
      </div>
    </div>
  </div> -->
              </div>
          


   <div class="container">
        <div class="row dapo text-center">
            <div class="col-sm-3">
                <strong>Qualitfied Doctors</strong>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            <div class="col-sm-3">
                Emergency Care
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
            <div class="col-sm-3">
                Outdoor Checkup
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
            <div class="col-sm-3">
                24 Hours Service
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.    
            </div>    
        </div>    
   </div>    
  </div>
</template>

<script>





export default {

  data () {
    return {
    
    } 
  },
  methods: {
 
  }
}


</script>
<style scoped>
 #app {
       
        /* background-image: url('../assets/images/hero.jpg');
        background-repeat: no-repeat; */
        font-family: 'Poppins';
      
    }

    /* .brand-logo {
        margin-top: 1em;
    }
    .nav-links {
        float: right;
        margin-top: -3em
       
    }
    .clear {
        clear: both;
    }
  .nav-links li {
      display: inline-block;
      color: black;
      margin-left: 20px;
      font-weight: 600;
     
  } */
/* 
    .navbar-nav li:last-child {
      color: white;
   
       background-image: -webkit-linear-gradient(left, #ebecf1 0%, #99bef8 100%);
      padding: 3px;
      border-radius: 100px;
      box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7);
      transition: all ease-out 0.2s;
     
  }

  .navbar-nav li:last-child:hover {
     
       transform: scale(1.1,1.1);
  } */
  h1 {
     font-weight:900;
 }

  .medical-service {
    
     position: absolute;
     top: 13em;
     left: 130px;
     /* font-size: 1.2em; */
 }

  .medical-service > h1 {
        font-size: 2em; 
        margin-bottom: 10px;
 }

 .dapo {
     /* position: relative;
     top: -6em; */
      box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19),  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }

 .dapo > div:nth-child(odd) {
     /* background-color: #2652D2;
      */
      background-image: -webkit-linear-gradient(top,#b2a3fb 0%, rgb(113, 122, 240) 100%);
     padding: 40px;
     /* color: seashell; */
 }
  .dapo > div:nth-child(even) {
     /* background-color: #7D93D4; */
      background-image: -webkit-linear-gradient(bottom,#b2a3fb 0%, rgb(113, 122, 240) 100%);
     /* color: seashell; */
     padding: 40px;
 }

</style>
