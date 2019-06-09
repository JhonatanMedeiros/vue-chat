<template>
  <div class="home">
    <div class="img-logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="container">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group
                id="input-group-username"
                label="Username:"
                label-for="input-username"
                description="The username is displayed in the chat."
        >
          <b-form-input
                  id="input-username"
                  v-model="username"
                  type="text"
                  required
                  placeholder="Enter your username"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public username: string = '';

  public onSubmit(): void {
    // console.log('submit', this.username);
    this.$router.push('/chat');
  }
}
</script>

<style scoped lang="scss">
  .img-logo {
    text-align: center;
  }
</style>
