<template>
  <AllRecipesList :recipes="recipes" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllRecipesList from "../components/AllRecipes/AllRecipesList.vue";
import { useRecipe } from "../utils/composable/useRecipe";

export default defineComponent({
  name: "Recipes",
  components: {
    AllRecipesList,
  },
  setup() {
    const { recipes } = useRecipe();

    return { recipes };
  },
});
</script>

<style lang="scss" scoped></style>
