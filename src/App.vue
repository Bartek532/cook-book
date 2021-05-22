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
// Variables
:root {
  --main-color: #c92e43;
  --main-white: #fff;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Candara", sans-serif;
}

* {
  font-family: inherit;
  box-sizing: border-box;
}
</style>
