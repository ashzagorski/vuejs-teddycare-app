<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Employee Number:</label>
          <input type="text" class="form-control" v-model="employeeNumber">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" onclick="location.href = '#/visits'" value="Submit">
      </form>
    </div>
  </div>
</template>

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