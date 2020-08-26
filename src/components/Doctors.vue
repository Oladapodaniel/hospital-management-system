<template>
  <div id="app">
      <!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="..\assets\images\logo.png"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="form-inline my-2 my-lg-0 ml-5">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search Doctor..." v-model="input" v-on:keyup="clearSearched()" arialabel="Search">
                      <button class="btn btn-outline-info my-2 my-sm-0" type="submit" v-on:click.prevent="searchDoctor()">Search</button>
                  </form>
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/" exact>Home </router-link>
                      </li>
                      <!-- <li class="nav-item">
                          <router-link class="nav-link" to="/doctors">About</router-link>
                      </li> -->
                      <li class="nav-item active">
                          <router-link class="nav-link" to="/doctors">Doctors</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="nav-link" to="/book-appointment" exact>Book Appointment</router-link>
                      </li>
                  </ul>
                  

             </div>
              </div>
         </nav>
         <div class="image-bg">
             <div class="container">
            <nav aria-label="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="doctors">Doctors</li>
                    </ol>
                </nav>
            </nav>

         </div>
          <div class="mt-5">
              <div class="col-12 medical-service text-center text-info mt-5">
                  <h1>Meet Our Doctors</h1>
                   <p class="mt-3">Everyday we bring hope and smile to the patient we serve.
                      You health is our priority with comprehensive and affordable.
                  </p>
              </div>
          </div>
         <div class="container" v-show="clearInput">
             <div class="row search-container">
                    <div class="col-sm-12" v-for="searched in searchedArr">
                        <a v-bind:href=" '#' + searched.id" v-on:click="clearWhenClicked()">
                            <div class="search"> 
                                <div class="text pt-3 text-center">
                                    <h3 v-nameSize>{{ searched.name }}</h3>
                                    <div class="position mb-2" v-aboutSize>{{ searched.specialization }}</div>
                                </div>
                            </div>
                        </a>
                    </div>
             </div>
         </div>
         <!-- <div class="img-cover">
            <img src="../assets/images/service-bg.png">
         </div> -->
        
        
        <div class="container">
           <div class="col-md-4 col-lg-3 mt-5 doctors" v-for="profileArr in profilesArr">
                <div :id="profileArr.id">
                    <div class="card card-display">
                        <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
                        <div class="card-body">
                            <div class="text pt-3">
                                <h3 v-nameSize class="text-center">{{ profileArr.name | color-it}}</h3>
                                <div>{{ profileArr.specialization }}</div>
                                <div v-aboutSize>{{ profileArr.email }}</div>
                                <div v-aboutSize>{{ profileArr.phoneNumber }}</div>
                                <div class="faded">
                                    <p v-aboutSize>{{ profileArr.about }}</p>
                                </div>
                            </div>
                        </div>
                        <svg width="2em" height="2em" @click="deleteDoctor(profileArr.id)" viewBox="0 0 16 16" class="bi bi-trash-fill text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                        </svg>
                        
                        <svg width="2em" height="2em" @click="updateDoctor(profileArr.id)" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                         <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Launch demo modal
                        </button> -->
                    </div>
                </div>
            </div>
            
      <div class="mt-5 mb-5">
        
          <div class="form-shadow col-12 col-md-10 offset-md-1">
    <form>
        <h1 class="display-4 text-center mt-5">Join Our League Of Doctors</h1>
        <p class="col-10 offset-1 text-center mt-3">Have an experience Doctor to join our league of professional Doctors here, Add them here, they'll have have an expansion in their medical career bla bla bla</p>
        
       <div class="form-group row">
            <label for="name" class="col-12 col-md-2 col-form-label">Name</label>
            <div class="col-12 col-md-10">
                <input type="text" class="form-control" v-model="name" id="name" name="name" placeholder="Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="telnum" class="col-12 col-md-2 col-form-label">Tel. Number</label>
            
            <div class="col-12 col-md-10">
                <input type="tel" class="form-control" id="telnum" v-model="phoneNumber" name="telnum" placeholder="Tel. Number">
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-12 col-md-2 col-form-label">Email</label>
            <div class="col-12 col-md-10">
                <input type="email" class="form-control" id="email" v-model="email" name="email" placeholder="Email">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-12 col-md-2">
                <label class="form-label" for="approve">Select Your Service</label>
            </div>
            <div class="col-12 col-md-5">
                <select class="form-control" v-model="specialization">
                    <option value="" disabled selected>Choose Your Option</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Cardiology">Neurology</option>
                    <option value="Dental">Dental</option>
                    <option value="Other Services">Other Services</option>
                </select>
            </div>
             <div class="custom-file col-12 col-md-5">
                <input type="file" class="custom-file-input"  id="customFile">
                <label class="custom-file-label" for="customFile">Choose File</label>
            </div>
        </div>
        <div class="form-group row">
            <label for="feedback" class="col-12 col-md-2 col-form-label">Message</label>
            <div class="col-12 col-md-10">
                <textarea class="form-control" id="feedback" v-model="about" name="feedback" rows="3"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <div class=" offset-md-2 col-12 col-md-10" text-center v-on:click.prevent="addDoctor()">
                <button type="submit" class="btn btn-info" >
                    ADD DOCTOR
                </button> 
               
                <br>
                <div class="alert alert-success" v-show="alert" role="alert">Doctor Added Successfully!</div>

            </div>
        </div>
    </form>
   
 

  
          </div>
      </div>
    
        </div>    
         </div>
   
  </div>
</template>

<script>
// import UUID from '@/uuidv4'
export default {
 
  data () {
    return {
      
            name: '',
            email: '',
            phoneNumber: '',
            specialization: '',
            about: '',
            input: '',
            searchedArr: [],
            clearInput: true,
            alert: false,
            individualDetails: {},
            profilesArr: []
           
           
            
            // card: [],
            // profilesArr: [
            //     {
            //         name: 'Dr. Lloyd Wilson',
            //         email: 'wilson2@ymail.com',
            //         phoneNumber: '+99924325467',
            //         specialization: 'Neurologist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'wilson'
            //     },
            //     {
            //         name: 'Dr. Iangopok Smith',
            //         email: 'ianamith7#gmail.com',
            //         phoneNumber: '+099567854836',
            //         specialization: 'Dentist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'smith'
            //     },
            //     {
            //         name: 'Dr. Racheal Parker',
            //         email: 'rachealparker22#gmail.com',
            //         phoneNumber: '+55678546736',
            //         specialization: 'Ophthamologist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'parker'
            //     },
            //     {
            //         name: 'Dr. Tupack Embryo',
            //         email: 'tupack2@gmail.com',
            //         phoneNumber: '+9559924325467',
            //         specialization: 'Neurologist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'embryo'
            //     },
            //     {
            //         name: 'Dr. Oshiomole Saburi',
            //         email: 'oshibaba#gmail.com',
            //         phoneNumber: '+5475454836',
            //         specialization: 'Ophathamologist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'saburi'
            //     },
            //     {
            //         name: 'Dr. Funke Hidey',
            //         email: 'funkicious22#gmail.com',
            //         phoneNumber: '+55673464736',
            //         specialization: 'Dentist',
            //         about: 'i am ambitious workaholic, but apart from that, pretty simple person',
            //         id: 'funke'
            //     }
            // ]
      }
     
  },
  methods: {
    addDoctor () {
        // Generate Random Number
        let random = Math.floor(Math.random() * 1000)
      
        for (let i = 0; i < this.profilesArr.length; i++) {
            if (random === this.profilesArr[i].id) {
                random = Math.floor(Math.random() * 500)
            }
        }

          //console.log(random)
        let doctor = {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            specialization: this.specialization,
            about: this.about,
            id: random
            
        }
        this.individualDetails = doctor
        // console.log(doctor)
        // this.profilesArr.push(doctor);
        // alert('doctor added successfully')

        // Display Alert For 3 Secs
            this.alert = true
        setTimeout(() => {
            this.alert = false
        }, 3000);
        
         // Display doctor while it sends to firebase, which will take effect on created(when page loads again)
        this.profilesArr.push(doctor)

          // updateDoctor
           
         // Check its id and see if id matches with any in the profilesArr id, if it  does, replace it
            
        // if (this.name !== '') {
        //     doctor.name = this.name
        //     doctor.email = this.email
        //     doctor.phoneNumber = this.phoneNumber
        //     doctor.specialization = this.specialization
        //     doctor.about = this.about
        //     doctor.id = random

            
        // }
        //   const doctorIndex = this.profilesArr.findIndex((item) => {
        //     return doctor.id === item.id
        // })
        // console.log(doctor.id)
        // this.profilesArr.splice(doctorIndex, 1)
        // console.log(doctor.id)
        
       
      


// this.profilesArr.splice(4, 1, {name: 'dapo', email: 'gbfvbnmbvddc', about: 'hgfdbhnjkmjhgfdfgjhvggf'})
     
          
        // console.log(this.name)
       
        // clear fields
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.specialization = '';
        this.about = '';

        // Integrate to Firebase
        this.$http.post('https://hospitalmanagement-119ee.firebaseio.com/doctors.json', this.individualDetails).then((data) => { return data })

      



    },
       searchDoctor () {
                let newArr = this.profilesArr.filter((item => {
                        return item.name.toLowerCase().match(this.input.toLowerCase())
                    }))
                    this.searchedArr = newArr;
                    return newArr
                    // console.log(this.searchedArr)
                        
                // console.log(this.searchedArr)
               
                
            },
       clearSearched () {
             if (this.input == '') {
                    this.clearInput = false
                 }
                else {
                     this.clearInput = true
                 }                
       },
       clearWhenClicked () {
        //    console.log('dapo')
        this.input = '';
        this.clearInput = false;
       },
       deleteDoctor (id) {
       
        this.$http.delete(`https://hospitalmanagement-119ee.firebaseio.com/doctors/${id}.json`)
            .then(() => {
                    const index = this.profilesArr.findIndex((i) => {
                    return i.id === id 
                })
                if (index > -1) {
                    this.profilesArr.splice(index, 1)
                }
            })
       },
       updateDoctor (id) {
        //     const item = this.profilesArr.find((i) => {
        //        return i.id === id 
        //    })
        //    this.name = item.name
        //    this.phoneNumber = item.phoneNumber
        //    this.email = item.email
        //    this.specialization = item.specialization
        //    this.about = item.about
        //    console.log(this.specialization)

            //    this.profilesArr.splice(index, 1, { name: 'dapo', email: "i specialize in front end web dev"})
            //    console.log(item.name)
        
   
      


       }
   
    },
    created () {
        this.$http.get('https://hospitalmanagement-119ee.firebaseio.com/doctors.json')
            .then((data) => { return data.json()})
            .then((data) => {
                let doctorDetails = []
                // conle.log(data)
                for (let key in data) {
                    data[key].id = key;
                    doctorDetails.push(data[key])
               
                }
               this.profilesArr = doctorDetails
                // console.log(this.profilesArr)
            })
        
        // console.log(UUID)
        console.log('dapo')
    },
    computed: {
      
    },
    filters: {
        'color-it': function (value) {
            return value.toUpperCase()
        },
       
       
    },
    directives: {
        aboutSize: {
            bind (el, binding, vnode) {
           return el.style.fontSize = '0.8rem'
        //    console.log(el.innerText.split(''))
            
        }
        },
        nameSize: {
            bind (el, binding, vnode) {
                return el.style.fontSize = '1.1em'
            }
        }
        
    }

}
</script>

<style scoped>
     #app {
         background-color: rgb(235, 235, 235);
     }
    .image-bg {
        background-image: url("../assets/images/service-bg.png");
        background-repeat: no-repeat;
        background-position: 100% 0;
    }

    .medical-service {
        background-color: rgba(7, 18, 24, 0.664);
        padding: 10px;
      
        
    
    }
    .navbar {
        /* z-index: 10 !important; */
        /* position: absolute;
        width: 100%;
        margin-top: -50px; */
    }

    /* svg {
        border: 2px solid red;        
    } */
    div.form-shadow {
        background-color: white;
    }
    svg[class="bi bi-pencil-square"] {
            position: absolute;
            top: 93%;
            left: 85%
    }
</style>










