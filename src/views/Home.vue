
<template>
  <div class="home">
     <section style="background-image: url('img/childrens-patient-room.jpg');" class=" section-divider">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="job-form-box">
              <h2 class="heading">Welcome, {{name}} </h2>
            <p style="text-align:center"><router-link class="btn btn-primary" v-bind:to="'/healthcare_providers/' + id"> Go To Today's Visits </router-link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h4>News</h4>
            </div>
            <p class="text-center text-muted">What's new at Children's Hospital? Check out our news!</p>
          </div>
        </div>
        <div id="blog-homepage" class="row">
          <div class="col-md-6">
            <div class="post">
              <div class="image"><a href="phttps://www.childrenshospitals.org/newsroom/childrens-hospitals-today/articles/2018/01/rounding-robots-connect-with-hospital-patients-and-staff"><img src="img/robots.jpg" alt="" class="img-fluid"></a></div>
              <h4><a href="post.html">Rounding Robots Connect with Hospital Patients and Staff</a></h4>
              <p class="post__intro">Robot technology helps leaders at Nicklaus Children's Hospital check on patients more than 100 miles away. Michael Harrington can wrap up a meeting with his staff members at Nicklaus Children's Hospital in Miami, Florida, and minutes later, he's able to join patient rounds at a separate facility more than 100 miles away. How does he do it? The answer: robot technology.</p>
              <p class="read-more"><a href="phttps://www.childrenshospitals.org/newsroom/childrens-hospitals-today/articles/2018/01/rounding-robots-connect-with-hospital-patients-and-staff" class="btn btn-outline-white-primary">Continue reading</a></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="post">
              <div class="image"><a href="https://med.stanford.edu/news/all-news/2017/09/virtual-reality-alleviates-pain-anxiety-for-pediatric-patients.html"><img src="img/vr.jpg" alt="" class="img-fluid"></a></div>
              <h4><a href="https://med.stanford.edu/news/all-news/2017/09/virtual-reality-alleviates-pain-anxiety-for-pediatric-patients.html">Virtual reality alleviates pain, anxiety for pediatric patients</a></h4>
              <p class="post__intro">

              “Many kids associate the hospital with things they deem stressful and scary,” said pediatric anesthesiologist Sam Rodriguez, MD, co-founder of Packard Children’s Childhood Anxiety Reduction through Innovation and Technology, or CHARIOT, program, which is leading the VR rollout. “We are finding that the ability to distract these patients with fully immersive, fun and relaxing sensory environments can have a significant impact on the anxiety and pain that they experience during minor procedures, dressing changes and other medical treatments.”</p>
              <p class="read-more"><a href="https://med.stanford.edu/news/all-news/2017/09/virtual-reality-alleviates-pain-anxiety-for-pediatric-patients.html" class="btn btn-outline-white-primary">Continue reading</a></p>
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
      id: localStorage.id,
      name: localStorage.name,
      nameFilter: "",
    }
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/patients/")
      .then(response => {
        this.patients = response.data;
      });
 },
  methods: {},
  computed: {}
 };
</script>