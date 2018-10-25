<template>
  <div class="questions-show">
    <h4> {{ question.prompt }} </h4>
    
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Answer
      </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" onclick="location.href = '#/questions/' + question.next_question_id" > {{ question.possible_answer[0]["choice"] }} </a>
    <a class="dropdown-item" onclick="location.href = '#/patients/1'" >{{ question.possible_answer[1]["choice"] }} </a>
    
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
      question: {}
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/questions/" + this.$route.params.id)
    .then(response => {
      this.question = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>