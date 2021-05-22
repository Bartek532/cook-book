<template>
  <router-view v-if="!isGlobalLoading"> </router-view>

  <Loader v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "./views/Loader.vue";
import { useLoading } from "./utils/composable/useLoading";
import { useRecipe } from "./utils/composable/useRecipe";

export default defineComponent({
  name: "App",
  components: {
    Loader,
  },
  setup() {
    const { isGlobalLoading } = useLoading();
    const { searchRecipesByQuery } = useRecipe();

    searchRecipesByQuery();

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
