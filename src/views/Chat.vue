<template>
  <div class="chat container">
    <h2>Chat Room</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="(message, idx) in messages" :key="idx">
            <span class="teal-text">{{ message.name }}:</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <NewMessage :name="name"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import db from "@/firebase/init";
import NewMessage from "@/components/NewMessage.vue";
export default {
  name: "Chat",
  data() {
    return {
      messages: [],
      error: null
    };
  },
  components: {
    NewMessage
  },
  props: ["name"],
  async created() {
    const ref = db.collection("message");
    // listenning on 'message' collection changes
    ref.onSnapshot(
      snapshot => {
        const changes = snapshot.docChanges().map(change => {
          const { type, doc } = change;
          if (type === "added")
            return {
              id: doc.id,
              name: doc.data().name,
              content: doc.data().message,
              timestamp: moment(doc.data().timestamp).format("lll")
            };
        });
        this.messages = [...this.messages, ...changes];
      },
      err => {
        this.error = err;
      }
    );
  }
};
</script>

<style lang="scss">
.chat {
  h2 {
    color: white;
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .card-content {
    text-align: left;
  }
  .messages {
    max-height: 300px;
    overflow: auto; /* show scrollbar when overflowing */
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
  }

  span {
    font-size: 1.4em;
  }
  span.time {
    display: block;
    font-size: 0.8em;
  }
}
</style>
