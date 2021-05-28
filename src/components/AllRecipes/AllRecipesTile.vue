<template>
  <article class="recipe">
    <div class="recipe__image">
      <img :src="recipe.image" :alt="recipe.label" />
    </div>
    <div class="recipe__description">
      <h3 class="recipe__description__title">{{ recipe.label }}</h3>
      <h4 class="recipe__description__type">
        {{
          recipe.dietLabels[0] ||
          recipe.healthLabels[
            Math.floor(Math.random() * recipe.healthLabels.length)
          ]
        }}
      </h4>
    </div>
    <span class="recipe__calories">
      {{ Math.round(recipe.calories / recipe.yield) }}
      calories
    </span>
    <div class="recipe__rates"></div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Recipe } from "../../types";

export default defineComponent({
  name: "AllRecipesTile",
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
  background-image: linear-gradient(90deg, #d8dde7 6%, #fff);
  width: 100%;
  max-width: 25rem;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  align-items: center;
  padding: 0.6rem 1.2rem;

  &__image {
    max-width: 6rem;
    border-radius: 10px;
    img {
      max-width: 100%;
      border-radius: 10px;
    }
  }

  &__description {
    padding-left: 1rem;
    &__title {
      margin: 0;
      font-size: 1.1rem;
      line-height: 1.2rem;
    }

    &__type {
      margin: 0;
      font-size: 0.8rem;
      color: var(--main-gray);
      margin-top: 0.1rem;
    }
  }

  &__calories {
    align-self: start;
    text-align: right;
    color: var(--main-gray);
    font-size: 1.1rem;
  }
}
</style>
