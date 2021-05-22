<template>
  <article class="recipe">
    <div class="recipe__image">
      <img :src="recipe.image" :alt="recipe.label" />
    </div>
    <div class="recipe__description">
      <h3 class="recipe__description__title">{{ recipe.label }}</h3>
      <h4 class="recipe__description__subtitle">{{ recipe.dietLabels[0] }}</h4>
    </div>
    <span class="recipe__calories">
      {{ Math.round(recipe.calories / recipe.yield) }}calories
    </span>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Recipe } from "../../types";

export default defineComponent({
  name: "AllRecipesItem",
  props: {
    recipe: {
      type: Object as () => Recipe,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.recipe {
  background-color: lightgray;
  width: 100%;
  max-width: 25rem;
  margin: 10px;

  &__image {
    max-width: 7rem;
    border-radius: 10px;
    img {
      max-width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
