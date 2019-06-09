<template>
  <div id="navbar">
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand href="#">
        VueJs Real Time Chat
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/chat">Chat</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Navbar extends Vue {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles";
  #navbar {
    .nav-link.router-link-exact-active {
      color: white !important;
    }
  }
</style>
