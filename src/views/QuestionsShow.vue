
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
             <div v-for="possible_answer in question.possible_answers">>
            
               <router-link :to="{name: 'questions-show', params: {id: possible_answer.next_question_id}}" > {{ possible_answer.choice }}  </router-link>
     
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
      visit_id: "", 
      possible_answer_id: "",
      question: {
        possible_answers: []
      },
      possible_answer: {
        next_question_id: "",
        choice: ""
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
  

    submit: function() {
      var params = {
        visit_id: this.visit_id,
        possible_answer_id: this.possible_answer_id
        };

      axios
        .post("/api/documented_answers", params)
        .then(response => {
          this.$router.push("/documented_answers/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }

  },

  beforeRouteUpdate(to, from, next) {
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