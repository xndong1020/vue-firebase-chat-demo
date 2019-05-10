<template>
  <div class="card-action">
    <form @submit.prevent="sendMessage">
      <div class="field">
        <label for="new-message">New Message (enter to add):</label>
        <input type="text" name="new-message" v-model="newMessage">
        <p class="red-text" v-if="error">{{ error }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { create } from "@/services/chatService.js";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      error: null
    };
  },
  methods: {
    async sendMessage() {
      if (!this.newMessage)
        this.error = "You must enter a message in order to send one";
      else {
        const req = {
          message: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        };
        try {
          await create(req);
        } catch (err) {
          this.error = err;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.card-action {
  .field {
    text-align: left;
  }
}
</style>
