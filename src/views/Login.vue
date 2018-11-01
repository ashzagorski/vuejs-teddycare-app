<template>
  <div class="login">
   <section class="job-form-section job-form-section--image">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="job-form-box" >
              <h2 class="heading">Login</h2>
              <form id="job-main-form" method="get" action="#" class="job-main-form" v-on:submit.prevent="submit()">
                 <ul>
                   <li class="text-danger" v-for="error in errors">{{ error }}</li>
                 </ul>
                <div class="controls">
                  <div class="row align-items-center">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="profession">Employee Number:</label>
                        <input type="text" id="profession" name="profession" placeholder="Employee Number" class="form-control" v-model="employeeNumber">
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="form-group">
                        <label for="location">Password:</label>
                        <input type="text" id="location" name="location" placeholder="Password" class="form-control" v-model="password">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <a type="submit" onclick="location.href = '#/healthcare_providers/' + healthcare_provider_id" class="btn btn-outline-white-primary"><i class="fa fa-sign-in"></i> Login</a>
                    </div>
                  </div>
                </div>
              </form>
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
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      employeeNumber: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        employee_number: this.employeeNumber,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("healthcare_provider_id", response.data.healthcare_provider_id);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid employee number or password."];
          this.employeeNumber = "";
          this.password = "";
        });
    }
  }
};
</script>