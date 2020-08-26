

<template>
  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="..\assets\images\logo.png"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <form class="form-inline my-2 my-lg-0 ml-5">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search Doctor..." @input="searchDoctor()" v-model="input" arialabel="Search">
                      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
                  </form>
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/" exact>Home </router-link>
                      </li>
                      <!-- <li class="nav-item">
                          <router-link class="nav-link" to="/doctors" exact>About</router-link>
                      </li> -->
                      <li class="nav-item">
                          <router-link class="nav-link" to="/doctors" exact>Doctors</router-link>
                      </li>
                      <li class="nav-item active">
                          <router-link class="nav-link" to="/book-appointment" exact>Book Appointment</router-link>
                      </li>
                  </ul>
             </div>
              </div>
         </nav>
     
     
    <div>
         
      
      
       <div class="container center">
           <img src="../assets/images/about.jpg">
            <div>Free Consultation</div>
       <div>Far far away, behind the word mountins, far from the counteries Vokalia and Consonantia, there live he blind texts.</div> 
                     
                        <div class="row">
                            <div class="col-sm-12 form-shadow">
                              
                                    <div>
                                        <div class="card-header text-center">
                                            <h4 class="display-4">Contact Us</h4>
                                        </div>
                                      
                                          
                                                <div class="row">
                                                <div class="col-sm-12">
                                                    <form>
                                                        <div class="form-group row">
                                                            <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control" v-model="firstName" id="firstname" name="firstname" placeholder="First Name">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control" v-model="lastName" id="lastname" name="lastname" placeholder="Last Name">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="telnum" class="col-12 col-md-2 col-form-label">Tel. Number</label>
                                                            <div class="col-5 col-md-3">
                                                                <input type="tel" class="form-control" id="areacode"  name="areacode" placeholder="Area Code">
                                                            </div>
                                                            <div class="col-7 col-md-7">
                                                                <input type="tel" class="form-control" id="telnum" v-model="phoneNumber" name="telnum" placeholder="Tel. Number">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="email" class="col-md-2 col-form-label">Email</label>
                                                            <div class="col-md-10">
                                                                <input type="email" class="form-control" id="email" v-model="email" name="email" placeholder="Email">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-sm-2">
                                                               <label class="form-label" for="approve">Select Your Service</label>
                                                            </div>
                                                            <div class="col-sm-10">
                                                            
                                                              <select class="form-control" v-model="service">
                                                            <option value="" disabled selected>Choose Your Option</option>
                                                            <option value="Ophthalmology">Ophthalmology</option>
                                                            <option value="Cardiology">Neurology</option>
                                                            <option value="Dental">Dental</option>
                                                            <option value="Other Services">Other Services</option>
                                                            
                                                        </select>
                                                            </div>
                                                            </div>

                                                             <div class="form-group row">
                                                            <label for="Date" class="col-md-2 col-form-label">Date</label>
                                                            <div class="col-md-10">
                                                                <input type="date" class="form-control" id="date" v-model="date" name="date" placeholder="Date">
                                                            </div>
                                                        </div>
                                                        
                                                             <div class="form-group row">
                                                            <label for="Time" class="col-md-2 col-form-label">Time</label>
                                                            <div class="col-md-10">
                                                                <input type="time" class="form-control" id="time" v-model="time" name="time" placeholder="Time">
                                                            </div>
                                                        </div>
                                                           
                                                            
                                                        
                                                        <div class="form-group row">
                                                            <label for="feedback" class="col-md-2 col-form-label">Message</label>
                                                            <div class="col-md-10">
                                                                <textarea class="form-control" id="feedback" v-model="message" name="feedback" rows="6"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-md-10 offset-sm-2" text-center v-on:click.prevent="submitIt()">
                                                                <button type="submit" class="btn btn-primary" >
                                                                    SUBMIT
                                                                </button>
                                                                <span class="alert alert-success" v-show="alert" role="alert">Appointment Booked!</span>
                                                            </div>

                                                             <div class="mt-3 col-md-10 offset-sm-2" ref="view" v-on:click.prevent="displayIt()">
                                                                <button type="submit" class="btn btn-primary" >
                                                                    {{ appointmentText }}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>


                                                    
                                                </div>
                        
                                            </div>
                                       
                                       
                                            
                                    </div>
                            
                            </div>
                        </div>
                    </div>
    </div>

 
 <!-- {{ setProp() }} -->
 <!-- {{ arr }} -->
<div class="container">
    <div class="row">
     <table class="table table-striped table-bordered" v-show="showIt">
     <thead>
         <tr>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Email</th>
         <th>Phone Number</th>
         <th>Service</th>
         <th>Time</th>
         <th>Date</th>
         <th>Message</th>
     </tr>
     </thead>
     <tbody>
         <tr v-for="detail in arrDetails">
         <td>{{ detail.firstName }}</td>
         <td>{{ detail.lastName }}</td>
         <td>{{ detail.email }}</td>
         <td>{{ detail.phoneNumber }}</td>
         <td>{{ detail.service }}</td>
         <td>{{ detail.time }}</td>
         <td>{{ detail.date }}</td>
         <td>{{ detail.message }}</td>
     </tr>
     </tbody>
     
     
 </table>
</div>
 
 </div>
 
 
  </div>
</template>

<script>
// import $ from '../../node_modules/jquery/dist/jquery.min.js'
//  $(document).ready(function () {
//      $('select').formSelect()
//  })
// import JQuery from  'jquery'
// import { bus } from '/main';
//   $(document).ready(function(){
//     $('.carousel').carousel();
//   }); 

export default {

//   props: ['detailsObject'],
// props: ['component'],
  data () {
    return {
        
    
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        service: '',
        time: '',
        date: '',
        message: '',
        arrDetails: [],
        showIt:false,
        alert: false,
        appointmentText: 'VIEW APPOINTMENT'
     
    
  
       
    }
  },
  methods: {
   
       submitIt () {
        
        let det = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            service: this.service,
            time: this.time,
            date: this.date,
            message: this.message,
            options: ''
        }
        
        this.arrDetails.push(det)
        this.alert = true;
        setTimeout(() => {
            this.alert = false
        }, 3000);
        
        // this.$emit('updateDetails', this.arrDetails)
        // console.log(dupArr)
        // console.log(arrDetails)
       },
       displayIt() {
          this.showIt = !this.showIt
          if (this.showIt == true) {
              this.appointmentText = 'HIDE APPOINTMENTS'
          } else if (this.showIt == false) {
              this.appointmentText = 'VIEW APPOINTMENTS'
          }
         
       }
  }
}

</script>
<style scoped>
  .router-link-active {
        border: none;
         border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    h1 {
     font-weight:900;
    }
    .form-shadow {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

   
</style>
