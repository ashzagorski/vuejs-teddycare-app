<template>
  <div class="patients-show">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="box applicant">
              <h4>Name: {{ patient.name }}</h4>
              <h4>Date of Birth: {{ patient.formatted.date_of_birth }}</h4>
              <h4>Address: {{ patient.address_1 }}</h4>
              <h4>{{ patient.address_2 }}</h4>
              <h4>{{patient.city }}, {{ patient.state }} {{ patient.zip_code }}</h4>

              <div class="d-flex justify-content-between">
                <p class="intro">Medications: {{ patient.medication }}</p>
                <div class="image"><img src="img/person-1.jpg" alt="" class="img-fluid rounded-circle"></div>
              </div>


              <a href="#/questions/1" class="btn btn-outline-white-secondary btn-sm"> <i class="fa fa-download"></i>Complete Pain Assessment</a><a href="#" data-toggle="modal" data-target="#contact-modal" class="btn btn-outline-white-secondary btn-sm"><i class="fa fa-envelope"></i>Contact </a><a href="javascript: void();" class="btn btn-outline-white-secondary btn-sm"> <i class="fa fa-archive"></i>archive</a><a href="#" data-toggle="modal" data-target="#coverletter-modal" class="btn btn-outline-white-secondary btn-sm"><i class="fa fa-file-text-o"></i>See cover letter</a>
              <p><span class="badge badge-info">Applied 28/10/2017</span> <span class="badge badge-success">Contacted 30/12/2017</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row packages">
          <div class="col-lg-4">
            <div class="package ">
              <div class="package-header">
                <h5>Pain Assessment</h5>
              </div>
              <div class="price">
                <div class="price-container">
                  <h1>Completed</h1>
                </div>
              </div>
              <ul>
                <li><i class="fa fa-check"></i>{{ patient.visit[0].formatted.visit_datetime}}</li>
                <li><i class="fa fa-times"></i>Pain present: {{ patient.visit[0].documented_answers[0].possible_answer.choice}}</li>
                <li><i class="fa fa-times"></i>{{ patient.visit[0].documented_answers[1].possible_answer.choice}}</li>
                <li><i class="fa fa-times"></i>{{ patient.visit[0].documented_answers[2].possible_answer.choice}}</li>
                <li><i class="fa fa-times"></i>Extended Security</li>
              </ul><a href="#" class="btn btn-outline-white-primary">View Results</a>
            </div>
          </div>
          <!-- end col-->
          <!-- end col-->
          <div class="col-lg-4">
            <div class="package best-value">
              <div class="package-header">
                <h5>Pain Assessment</h5>
                <div class="meta-text">Completed Today</div>
              </div>
              <div class="price">
                <div class="price-container">
                  <h4></h4><span class="period">results pending</span>
                </div>
              </div>
              <ul>
                <li><i class="fa fa-check"></i>11-3-2018</li>
                <li><i class="fa fa-check"></i>Own config file</li>
                <li><i class="fa fa-check"></i>Sharing Tools</li>
                <li><i class="fa fa-times"></i>Auto Backup</li>
                <li><i class="fa fa-times"></i>Extended Security</li>
              </ul><a href="#" class="btn btn-outline-white-primary">View Results</a>
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
      patient: {
        formatted: {
          date_of_birth: ""
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
  },
  methods: {},
  computed: {}
};
</script>