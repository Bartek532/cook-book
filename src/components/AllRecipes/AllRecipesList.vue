<template>
  <section class="all-recipes">
    <AllRecipesTile
      v-for="recipe in recipes"
      :key="recipe.uri"
      :recipe="recipe"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Recipe } from "../../types";
import AllRecipesTile from "./AllRecipesTile.vue";

export default defineComponent({
  name: "PopularRecipesList",
  components: {
    AllRecipesTile,
  },
  props: {
    recipes: {
      type: Object as () => Recipe[],
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
