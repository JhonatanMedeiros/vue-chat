<template>
    <div id="input-chat">
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="8" sm="10" class="text-left">
            <b-input
              id="inline-form-input-name"
              class="w-100"
              placeholder="Enter the message"
              v-model="msg"
            ></b-input>
          </b-col>

          <b-col cols="4" sm="2" class="text-right">
            <b-button variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ChatInput extends Vue {

      public msg: string = '';

      public onSubmit(): void {
        this.msg = '';
      }
    }
</script>

<style scoped lang="scss">

  #input-chat {
    padding: 0 10px;
  }

</style>
