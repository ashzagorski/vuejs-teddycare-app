<template>

  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
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
        <input type="submit" class="btn btn-success" value="Login">
      </form>
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
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          this.$router.push("/home");
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

"familyId"