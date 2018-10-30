
<template>
  <div class="healthcare-providers-show">
    <div class="card" style="width: 25rem;">
  <div class="card-header">
    Today's Visits
  </div>
  <ul class="list-group list-group-flush">

  
      <li v-for="visit_datetime in healthcare_provider.formatted.todays_visits.visit_datetime">
        {{visti_datetime}}
      </li>
  
    <!-- <li class="list-group-item"> {{ healthcare_provider.formatted.todays_visits[0]["visit_datetime"] }} </li>
    <li class='list-group-item'> {{ healthcare_provider.formatted.todays_visits[1]["visit_datetime"] }} </li>
    <li> {{ healthcare_provider["visit"][2]["patient_name"] }} </li> -->
    <router-link class="btn btn-primary" v-bind:to="'/patients/1'">Start Visit</router-link>
  </ul>
</div>
    
</div>

  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      healthcare_provider: {
        formatted: {
          todays_visits: [
            ],
        }
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/healthcare_providers/" + this.$route.params.id)
    .then(response => {
      this.healthcare_provider = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>