<template>
  <div class="patients-show">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="box applicant">
              <h4><span class="accent">NAME:</span> {{ patient.name }} </h4>
              <h4><span class="accent">DATE OF BIRTH:</span> {{ patient.formatted.date_of_birth }}</h4>
              <h4><span class="accent">ADDRESS:</span> {{ patient.address_1 }}</h4>
              <h4>{{ patient.address_2 }}</h4>
              <h4>{{patient.city }}, {{ patient.state }} {{ patient.zip_code }}</h4>

              
                <p class="intro"><span class="accent">MEDICATOINS:</span> {{ patient.medication }}</p>
               
              <div class="d-flex justify-content-between">
                 <p class="intro"><span class="accent">MEDICAL NUMBER:</span> {{ patient.id }}</p>
                <div class="image"><img src="img/girl.jpg" alt="" class="img-fluid rounded-circle"></div>
              </div>


              <a href="#/questions/1" class="btn btn-outline-white-secondary btn-sm"> <i class="fa fa-file-text-o"></i>Complete Pain Assessment</a><a href="#/echo" v-on:click="storePatientId(patient)"class="btn btn-outline-white-secondary btn-sm"> <i class="fa fa-file-text-o"></i>Complete Pain Assessment with Echo</a>
              <p><span class="badge badge-success">{{visit_id}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
  <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="heading">Pain Assessment Results</h2>
            <p class="lead text-center">This is the lead paragraph of the article. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.</p>
          </div>
        </div>
        <div class="row team">
          <div class="col-lg-3 col-sm-6" v-for="visit in patient.visit">
            <div class="team-member" >
              <div class="image"><img src="img/cold-weather.jpg" alt="" class="img-fluid rounded-circle"></div>
              <h3 class="h4"><a href="#">Completed</a></h3>
              <p class="role">{{visit.formatted.visit_datetime}}</p>
              <div class="social"><a href="#" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" class="email"><i class="fa fa-envelope"></i></a></div>
              <div class="text" v-for="documented_answer in visit.documented_answers">
                <p>{{ documented_answer.possible_answer.choice }} </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
   
        

    <section class="section bg-light-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li aria-current="page" class="breadcrumb-item active">Packages</li>
              </ul>
            </nav>
            <h1 class="heading">Packages</h1>
            <p class="lead text-center mb-4">
                       
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.  
            </p>
          </div>
        </div>
      </div>
    </section>
  

  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      visit_id: localStorage.visitId,
      patient: {
        formatted: {
          date_of_birth: ""
        },
        visits: {
          visit: {
            documented_answers: {}
          }
        }
        
      }
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/patients/" + this.$route.params.id)
      .then(response => {
        this.patient = response.data;
      });
    axios
      .get("http://localhost:3000/api/documented_answers/")
      .then(response => {
        this.documented_answers = response.data;
      });
  },
  methods: {
    storePatientId: function(patient) {
      localStorage.setItem('patientId', patient.id);
  }
},
  computed: {} 

};

</script>