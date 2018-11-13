<template>
  <div class="echo">
       <section class="bg-light-gray">
      <div class="container">
        <h1 class="heading">Echo Pain Assessment<br><small> <a href="#"> VISIT ID: {{visit_id}}</a></small></h1>
        <p style="text-align: center;">Utilize Echo the Teddy Bear to Complete Pain Assessment and when complete press "Completed Pain Assessment" button. </p>
        <div class="job-detail-description">
          User: "Launch Teddy Talk." <br>
          User: "Start Pain Assessment" <br>
          User: Provide visit ID when prompted. <br>
          <br>
          <br>
        </div>
         <div class="job-detail__apply-top" style="text-align: center;">
            <router-link class="btn btn-primary" v-bind:to="'/patients/' + patient_id"> Completed Pain Assessment </router-link>
         </div>
       </div>
    </section>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      visit_id: localStorage.visitId,
      patient_id: localStorage.patientId
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>