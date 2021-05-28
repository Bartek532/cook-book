<template>
  <main class="main">
    <div class="main__modal">
      <RecipeIcon />
      <img src="../assets/svg/recipe.svg" alt="recipe" />
      <h1 class="main__modal__title">Recipe?</h1>
      <p class="main__modal__description">
        Nutritionally balanced, easy to cook recipes. Quality fresh local
        ingredients.
      </p>
      <router-link to="/recipes">
        <button class="main__modal__btn">Search for recipe</button>
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecipeIcon from "./recipe.svg";

export default defineComponent({
  name: "Hero",
  components: {
    RecipeIcon,
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/theme.jpg");
  overflow-x: hidden;
  background-position: center center;
  background-size: cover;

  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 25px;
    width: 90%;
    max-width: 20rem;
    padding: 3rem 2rem 2rem;

    &__title {
      color: var(--main-color);
      margin-bottom: 0;
    }

    &__description {
      text-align: center;
      font-size: 1.1rem;
      margin: 1.5rem 0;
    }

    &__btn {
      color: var(--main-white);
      border: 0 none;
      background-color: var(--main-color);
      padding: 0.7rem 2.1rem;
      font-size: 1rem;
      border-radius: 10px;
      margin-top: 1.4rem;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: var(--main-white);
        color: var(--main-color);
      }
    }
  }
}
</style>
