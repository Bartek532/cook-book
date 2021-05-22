<template>
  <template v-if="!isGlobalLoading"><Hero /></template>

  <Loader v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "./views/Hero.vue";
import Loader from "./views/Loader.vue";
import { useLoading } from "./composable/useLoading";

export default defineComponent({
  name: "App",
  components: {
    Hero,
    Loader,
  },
  setup() {
    const { isGlobalLoading } = useLoading();

    return { isGlobalLoading };
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
