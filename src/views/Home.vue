
<template>
  <div class="home">
     <section class="job-form-section job-form-section--image">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="job-form-box">
              <h2 class="heading">Welcome, {{name}} </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="job-form-section job-form-section--compressed">
      <div class="container">
        <h4 class="heading">Search for Patient </span></h4>
        <form id="job-main-form" method="get" action="#" class="job-main-form">
          <div class="controls">
            <div class="row align-items-end">
              <div class="col-sm-1 col-lg-2"></div>
              <div class="col-sm-5 col-lg-4 form-group">
                <label for="profession">Name</label>
                <input type="text" id="profession" name="patient-name" placeholder="Patient Name" class="form-control">
              </div>
              <div class="col-sm-5 col-lg-4 form-group">
                <label for="location">Visit Date</label>
                <input type="text" id="location" name="location" placeholder="Visit Date" class="form-control">
              </div>
              <div class="col-sm-1 col-lg-2 form-group">
                <button type="submit" name="name" class="btn btn-outline-white-primary job-main-form__button"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
      <section style="background-image: url('img/startup.jpg'); " class="section-divider">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>View Today's Visits </p>
            <p> <router-link class="btn btn-primary" v-bind:to="'/healthcare_providers/' + id"> Today's Visits </router-link></p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h4>From our blog</h4>
            </div>
            <p class="text-center text-muted">What's new at Children's Hospital? Check out our news!</p>
          </div>
        </div>
        <div id="blog-homepage" class="row">
          <div class="col-md-6">
            <div class="post">
              <div class="image"><a href="post.html"><img src="img/blog1.jpg" alt="" class="img-fluid"></a></div>
              <h4><a href="post.html">Combining Technology and Healthcare</a></h4>
              <p class="post__intro">ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <p class="read-more"><a href="post.html" class="btn btn-outline-white-primary">Continue reading</a></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="post">
              <div class="image"><a href="post.html"><img src="img/blog2.jpg" alt="" class="img-fluid"></a></div>
              <h4><a href="post.html">How Technology is Making Healthcare Less Stressful for Children</a></h4>
              <p class="post__intro">ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <p class="read-more"><a href="post.html" class="btn btn-outline-white-primary">Continue reading</a></p>
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
      name: localStorage.name
    }
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>