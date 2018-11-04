<template>
  <div class="question-show">
  <section class="bg-light-gray">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <h2 class="heading">Pain Assessment </h2>
             <h3 class="heading"> Question: {{question.id}} </h3>
            <h4 class="lead text-center"> {{ question.prompt}} </h4>
          </div>
        </div>
      </div>
    </section>
     <section class="bg-light-gray">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <div v-for="possible_answer in question.possible_answers">
             <router-link :to="{name: 'questions-show', params: {id: possible_answer.next_question_id}}" > {{ possible_answer.choice }} </router-link>
     
             </div>
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
      newDocumentedAnswer: {visit_id: "", possible_answer_id: "" },
      question: {
        possible_answers: []
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/questions/" + this.$route.params.id)
    .then(response => {
      this.question = response.data;
    });
  },

    
  methods: {
  

    addDocumentedAnswer: function() {
      this.errors = [];
      var params = {
                    visit_id: this.newDocumentedAnswer.visit_id,
                    possible_answer_id: this.newDocumentedAnswer.possible_answer_id
                  };

     axios
      .post("http://localhost:3000/api/documented_answers", params)
      .then(response => {
        this.documentedAnswer.push(response.data);
        this.newDocumentedAnswer = {visit_id: "", possible_answer_id: ""};
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  },

  beforeRouteUpdate (to, from, next) {
    axios
    .get("http://localhost:3000/api/questions/" + to.params.id)
    .then(response => {
      this.question = response.data;
    });
    next();
  },
  computed: {}
};
</script>