<template>
  <div id="app">
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container"><a href="#/home" class="navbar-brand"><img src="img/teddybearhospital.png" alt="logo" class="d-none d-lg-block"><img src="img/teddybearhospital.png" alt="logo" class="d-block d-lg-none"><span class="sr-only">Go to homepage</span></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="#/home" class="nav-link">Home <span class="sr-only">(current)</span></a></li>
              <li class="nav-item active"><a href="#searchModal" data-toggle="modal" class="nav-link">Search for Patient</a></li>
              <li class="nav-item dropdown"><a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">{{name}}</a>
                <div aria-labelledby="pages" class="dropdown-menu">
                  <a href="#/home" class="dropdown-item">Home</a>
                  <a v-bind:to="'/healthcare_providers/' + id" class="dropdown-item">Todays Visits</a>
                  <a href="#/visits" class="dropdown-item">All Visits</a>             
                </div>
              </li>
              <li class="nav-item dropdown"><a onclick="location.href = '#/logout'" data-toggle="modal" class="btn navbar-btn btn-outline-light mb-5 mb-lg-0"> <i class="fa fa-sign-in"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
     <div id="searchModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade">
      <div role="document" class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="exampleModalLabel" class="modal-title">Search For Patient</h4>
            <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <form action="customer-orders.html" method="post">
              <div class="form-group" id="search-by-name">
                <input id="search-by-name" type="text" placeholder="name" class="form-control" v-model="nameFilter" list="names">
                <datalist id="names">
                  <option v-for="patient in patients"value="patient.id"> {{patient.name}}</option>
                </datalist>
              </div>
              <p class="text-center">
                <router-link v-bind:to="'/patients/' + patient.id"><i class="fa fa-sign-in"></i> Search</router-link>
              </p>
            </form>
 
          </div>
        </div>
      </div>
    </div>
    <router-view/>
     <footer class="footer">
      <div class="footer__block">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-5">
              <h4 class="h5">About Teddy Care</h4>
              <p>Teddy Care is a <strong>interactive teddy bear </strong> developed to decrease children's stress in a healthcare setting. </p>
              <p> Utilize Teddy with patient's to decrease stress and increase effective diagnosis </p>
            </div>
            <div class="col-lg-4 col-md-6 mb-5">
              <h4 class="h5">This Site</h4>
              <ul class="list-unstyled">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/login">Login</a></li>
                <li><a href="#/home">Logout</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4 class="h5">Where to use?</h4>
              <h5>Doctors Offices</h5>
              <p> Donec eleifend<br />libero at sagittis<br />mollis + 44 2556 789 8799</p>
              <h5>Hospitals</h5>
              <p> Donec eleifend<br />libero at sagittis<br />mollis + 41 2556 789 8799</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      name: localStorage.name,
      id: localStorage.id,
      patient: {
        formatted: {
          date_of_birth: ""
        }
      },
      nameFilter: "",
      patients: []
    };
  },
  created: function() {
    
    axios
    .get("http://localhost:3000/api/patients/")
    .then(response => {
      this.patients = response.data;
    });
  },
  methods: {
    selectPatient: function(patient) {
        this.$router.push("/patients/" + patient.id);
        }
  },
  computed: {}
};
</script>