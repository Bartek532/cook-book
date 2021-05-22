<template>
  <Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "./views/Hero.vue";

export default defineComponent({
  name: "App",
  components: {
    Hero,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
