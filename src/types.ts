export type Digest = {
  readonly daily: number;
  readonly hasRDI: boolean;
  readonly label: string;
  readonly schemaOrgTag: string;
  readonly tag: string;
  readonly total: number;
  readonly sub: Digest[];
  readonly unit: string;
};

export type Ingredient = {
  readonly foodCategory: string;
  readonly foodId: string;
  readonly image: string | null;
  readonly text: string;
  readonly weight: number;
};

export type Nutrient = {
  readonly label: string;
  readonly quantity: number;
  readonly unit: string;
};

export type Recipe = {
  readonly calories: number;
  readonly cautions: string[];
  readonly cuisineType: string[];
  readonly dietLabels: string[];
  readonly digest: Digest[];
  readonly dishType: string[];
  readonly healthLabels: string[];
  readonly image: string;
  readonly ingredientLines: string[];
  readonly ingredients: Ingredient[];
  readonly label: string;
  readonly mealType: string[];
  readonly shareAs: string;
  readonly source: string;
  readonly totalDaily: Record<string, Nutrient>;
  readonly totalNutrients: Record<string, Nutrient>;
  readonly totalTime: number;
  readonly totalWeight: number;
  readonly uri: string;
  readonly url: string;
  readonly yield: number;
};
