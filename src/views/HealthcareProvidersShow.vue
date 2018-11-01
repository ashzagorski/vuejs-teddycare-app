
<template>
  <div class="healthcare-provider-show">
  <section>
      <div class="container">
        <h4 class="heading">Todays Visits</h4>
        <div class="job-listing job-listing--featured ">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="row">
                <div class="col-2"><img src="img/company-1.png" alt="LoremIpsum " class="img-fluid"></div>
                <div class="col-10">
                  <h4 class="job__title"><a href="detail.html">{{ healthcare_provider.visit[0]["patient_name"] }} </a></h4>
                  <p class="job__company">
                     
                    Age: 10
                  </p>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-3 col-lg-2 ml-auto"><i class="fa fa-map-marker job__location"></i>{{ healthcare_provider.formatted.todays_visits[0]["visit_datetime"] }}</div>
            <div class="col-10 col-md-3 col-lg-3 ml-auto">
               <a type="button" class="btn btn-primary btn-lg btn-block" href="#/questions/1">Start Visit</a>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-1">
              <div class="job__star"><a href="#" data-toggle="tooltip" data-placement="top" title="Save to favourites" class="job__star__link"><i class="fa fa-star"></i></a></div>
            </div>
          </div>
        </div>
         <div class="job-listing  job-listing--last">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="row">
                <div class="col-2"><img src="img/company-4.png" alt="ShareBoardd " class="img-fluid"></div>
                <div class="col-10">
                  <h4 class="job__title"><a href="detail.html">Team Leader</a></h4>
                  <p class="job__company">
                     
                    ShareBoardd
                  </p>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-3 col-lg-2 ml-auto"><i class="fa fa-map-marker job__location"></i>Palo Alto</div>
            <div class="col-10 col-md-3 col-lg-3 ml-auto">
               <a type="button" class="btn btn-primary btn-lg btn-block" href="#/questions/1">Start Visit</a>

            </div>
            <div class="col-sm-12 col-md-2 col-lg-1">
              <div class="job__star"><a href="#" data-toggle="tooltip" data-placement="top" title="Save to favourites" class="job__star__link"><i class="fa fa-star"></i></a></div>
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