
<template>
  <div class="healthcare-providers-show">
    <h4> {{ healthcare_provider.todays_visits }} </h4>

    <ul>
      <li v-for="todays_visits in healthcare_provider.todays_visits">
        {{todays_visit}}
      </li>
    </ul>
    
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
      healthcare_provider: {}
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