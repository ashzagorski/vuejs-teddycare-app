<template>
  <div class="questions-show">
    <h4> {{ question.prompt}} </h4>


    
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Answer
      </button>
  <!-- div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
   <div v-for="possible_answer in question.possible_answers">
    <router-link :to="'/questions/' +  possible_answer.next_question_id" :key="$route.params.id" > {{ possible_answer.choice }} </router-link>
     
   </div>
  <!--   <a v-for="possible_answer in question.possible_answers" class="dropdown-item" onclick="location.href = '#/questions/' +  possible_answer.next_question_id" > {{ possible_answer.choice }} </a> -->

  
    
  <!-- </div>
 -->
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
    },

    mounted: function() {
     const vm = this

     vm.$http.get("http://localhost:3000/api/questions/" + vm.$route.params.id)
         .then(response => {
             vm.question = response.data
        });
      },
  },

  computed: {}
};
</script>