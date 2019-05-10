<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p class="pink-text" v-if="message">{{ message }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      message: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.message = null;
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.message = "You must enter a name to join chat";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.welcome {
  max-width: 400px;
  h2 {
    font-size: 3em;
  }
  button {
    margin: 30px auto;
  }
}
</style>
