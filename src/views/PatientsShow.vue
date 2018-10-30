<template>
  <div class="patients-show">
    <h1>Name: {{ patient.name }}</h1>
    <h5>DOB: {{ patient.formatted.date_of_birth }}</h5>
    <h4>Address: {{ patient.address_1 }}</h4>
    <h4> {{ patient.address_2 }} </h4>
    <h4>{{patient.city }}, {{ patient.state }} {{ patient.zip_code }} </h4>
    <h4> Medication/s: {{ patient.medication }} </h4>

    <a type="button" class="btn btn-primary btn-lg btn-block" href="#/questions/1">Pain Assessment</a>
  

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