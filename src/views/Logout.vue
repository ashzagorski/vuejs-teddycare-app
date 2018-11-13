<template>
  <div class="logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("patientId");
    this.$router.push("/");
  }
};
</script>