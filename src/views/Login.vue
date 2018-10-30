<template>
  <div class="login">
    <section class="bg-light-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 class="heading">Login</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
        <div class="row">
           <div class="col-lg-8">
            <div class="box">
              
              <form action="client-dashboard.html" method="post">
                <ul>
                 <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label for="employee-number">Employee Number: </label>
                  <input id="employee-number" type="text" class="form-control">
                </div>
              </form>
              <div class="form-group">
                <label for="password">Password: </label>
                <input id="password" type="password" class="form-control">
              </div>
              <div class="text-center">
                <button type="submit" onclick="location.href = '#/visits'" class="btn btn-outline-white-primary"><i class="fa fa-sign-in"></i> Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
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