
<template>
  <div class="question-show">
  <section class="bg-light-gray">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <h2 class="heading">Pain Assessment </h2>
             <h4 class="heading"> Question: {{question.id}} </h4>
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

              <div class="pages">
                <p class="load-more"><a v-on:click="selectAnswer(possible_answer)" class="mb-4 btn btn-outline-white-primary"><i class="fa fa-chevron-down" > </i>{{possible_answer.choice}}</a></p>
             </div>
            </div>
        </div> 
         <div class="row"> 
         <div class="col-xl-8 mx-auto">
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
      },
      errors: []
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
  
    selectAnswer: function(possibleAnswer) {
      axios
        .post("http://localhost:3000/api/documented_answers", {possible_answer_id: possibleAnswer.id, visit_id: localStorage.getItem("visitId")})
        .then(response => {
          this.$router.push("/questions/" + possibleAnswer.next_question_id);
          if (possibleAnswer.next_question_id === 6 ) {
            setTimeout(this.$router.push("/patients/" + localStorage.getItem("patientId")), 9000);
          }
          
        })
        .catch(error => {
          console.log(error);
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