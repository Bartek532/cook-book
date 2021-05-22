import { useLoading } from "./useLoading";
import { API_URL, APP_ID, APP_KEY } from "../consts";
import axios from "axios";
import type { Recipe } from "../../types";
import { ref } from "vue";

type ApiResults = {
  count: number;
  from: number;
  more: boolean;
  hits: { recipe: Recipe }[];
  q: string;
  to: number;
};

const recipes = ref([] as Recipe[]);

export const useRecipe = () => {
  const { setLoading } = useLoading();
  const searchRecipesByQuery = async (query = "chicken") => {
    setLoading(true);
    try {
      const { data }: { data: ApiResults } = await axios.get(
        `${API_URL}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      recipes.value = data.hits.map(item => item.recipe);
      console.log(data.hits);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { recipes, searchRecipesByQuery };
};
