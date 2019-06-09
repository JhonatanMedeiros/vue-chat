<template>
  <div class="home">
    <div class="img-logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <b-form @submit="onSubmit($event)">
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

  public onSubmit(event: Event): void {
    event.preventDefault();
    // console.log('submit', this.username);
  }
}
</script>

<style scoped lang="scss">
  .img-logo {
    text-align: center;
  }
</style>
