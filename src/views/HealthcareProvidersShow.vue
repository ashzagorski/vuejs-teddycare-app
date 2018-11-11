
<template>
  <div class="healthcare-provider-show">
    <section>
      <h3 class="heading">You Have {{ healthcare_provider.todays_visits.length }} Visits Today  </h3>
      <div class="container" v-for="todays_visit in healthcare_provider.todays_visits">
         <div class="job-listing job-listing--featured ">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="row">
                <div class="col-2"><img src="img/person-1.jpg" alt="LoremIpsum " class="img-fluid"></div>
                <div class="col-10" >
                  <h4 class="job__title"><a href="detail.html">{{ todays_visit.patient.name }} </a></h4>
                  <p class="job__company">
                     {{ todays_visit.patient.date_of_birth}}
                    
                  </p>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-3 col-lg-3 ml-auto"><i class="fa fa-map-marker job__location"></i> {{todays_visit.formatted.visit_datetime }} </div>
            <div class="col-10 col-md-3 col-lg-3 ml-auto">
                <button class="btn btn-primary" v-on:click="storeId(todays_visit)" v-bind:to="'/patients/' + todays_visit.patient.id ">Start Visit</button>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-1">
              <div class="job__star"><a href="#" data-toggle="tooltip" data-placement="top" title="Save to favourites" class="job__star__link"><i class="fa fa-star"></i></a></div>
            </div>
        </div>
       </div>
     </div>
   </section>/
        <div class="pages">
          <p class="load-more"><a href="#" class="mb-4 btn btn-outline-white-primary"><i class="fa fa-chevron-down"> </i>Load more</a></p>
          <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-4 mb-4">
            <ul class="pagination">
              <li class="page-item"><a href="#" aria-label="Previous" class="page-link"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a></li>
              <li class="page-item active"><a href="#" class="page-link">1</a></li>
              <li class="page-item"><a href="#" class="page-link">2</a></li>
              <li class="page-item"><a href="#" class="page-link">3</a></li>
              <li class="page-item"><a href="#" class="page-link">4</a></li>
              <li class="page-item"><a href="#" aria-label="Next" class="page-link"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a></li>
            </ul>
          </nav>
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
        todays_visits: {
          todays_visit: {
            id: "",
            patient: {
              id: "",
              name: "",
              date_of_birth: "",
            },
            formatted: {
              visit_datetime: "",
            }
          }
        },
      seen: true
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

  methods: {
    storeId: function(todaysVisit) {
      localStorage.setItem('visitId', todaysVisit.id);
      this.$router.push("/patients/" + todaysVisit.patient.id);
    },
    toggleVisit: function(inputVisit) {
      inputVisit.bioVisible = !inputVisit.bioVisible;
    },
    changeSeen: function(inputVisit) {
      inputVisit.seen = false;

    }
  },
  computed: {}
};
</script>