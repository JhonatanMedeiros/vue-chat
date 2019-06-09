<template>
  <div id="app">
    <navbar></navbar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: { Navbar },
})
export default class App extends Vue {
}
</script>
