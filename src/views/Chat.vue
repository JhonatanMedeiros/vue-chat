<template>
  <div id="chat">
    <h1>chat works</h1>
    <chat-history v-bind:messages="messages"></chat-history>
    <chat-input></chat-input>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ChatHistory from '@/components/ChatHistory.vue';
  import ChatInput from '@/components/ChatInput.vue';
  import { Chat } from '@/models/Chat';

  @Component({
    components: { ChatHistory, ChatInput },
  })
  export default class HelloWorld extends Vue {

    public messages: Chat[] = [
      { username: 'Fulano', message: 'Entrou no chat.', time: new Date().toDateString(), type: 'info' },
      { username: 'Fulano', message: 'Olá tudo bem ?', time: new Date().toDateString(), type: 'received' },
      { username: 'Ciclano', message: 'Olá', time: new Date().toDateString(), type: 'sender' },
      { username: 'Ciclano', message: 'Tudo bem e com voce?', time: new Date().toDateString(), type: 'sender' },
      { username: 'Fulano', message: 'Estou bem', time: new Date().toDateString(), type: 'received' },
      { username: 'Ciclano', message: 'Vou nessa flw', time: new Date().toDateString(), type: 'sender' },
      { username: 'Ciclano', message: 'Saiu do chat.', time: new Date().toDateString(), type: 'sender' },
    ];
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  h1 {
    padding: 0 10px;
  }

</style>
