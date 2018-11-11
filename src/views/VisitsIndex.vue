<template>
   <div class="card" style="width: 25rem;">
  <div class="card-header">
    All Visits
  </div>
  <ul class="list-group list-group-flush" v-for="visit in visits">
    <li class="list-group-item"> {{ visit.formatted.visit_datetime }} </li>
    <li class="list-group-item"> {{ visit.patient_name }}</li>
    <router-link class="btn btn-primary" v-bind:to="'/patients/' + visit.patient_id"> Start Visit </router-link>
  </ul>
</div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
    data: function() {
      return {
        visits: []
      };
    },
    created: function() {
      axios
        .get("http://localhost:3000/api/visits")
        .then(response => {
          this.visits = response.data;
        });
    },
    methods: {},
    computed: {}
  };
</script>
