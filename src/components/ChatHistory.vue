<template>

    <div id="chat-history">
        <div class="chat-item" v-for="msg of messages" v-bind:class="msg.type || 'sender'">
          <span class="font-weight-bold">{{msg.username}}</span>
            <p>{{msg.message}}</p>
            <span class="time">{{msg.time}}</span>
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Chat } from '@/models/Chat';

    @Component
    export default class ChatHistory extends Vue {

      @Prop()
      private messages: Chat[] | undefined;

    }
</script>

<style scoped lang="scss">

  #chat-history {
    max-height: 500px;
    overflow: auto;
    padding: 0 10px;
    margin-bottom: 20px;

    .chat-item {
      border: 2px solid #dedede;
      background-color: #f1f1f1;
      border-radius: 5px;
      padding: 10px;
      margin: 10px 0;

      &:after {
        content: "";
        clear: both;
        display: table;
      }

      &.sender {
        border-color: #ccc;
        background-color: #ddd;

        .time {
          float: right;
          color: #999;
        }
      }

      img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 50%;
      }

      .time {
        float: left;
        color: #aaa;
      }

    }

  }

</style>
