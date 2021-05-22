<template>
  <section class="all-recipes">
    <AllRecipesItem
      v-for="recipe in recipes"
      :key="recipe.uri"
      :recipe="recipe"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Recipe } from "../../types";
import AllRecipesItem from "./AllRecipesItem.vue";

export default defineComponent({
  name: "PopularRecipesList",
  components: {
    AllRecipesItem,
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
