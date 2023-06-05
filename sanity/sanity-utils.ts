import { createClient, groq } from "next-sanity";

export async function getRecipe() {
  const client = createClient({
    projectId: "r6nc7qm6",
    dataset: "production",
    apiVersion: "2023-05-09",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "recipe"]{
        _id,
        name,
        description,
        ingredients[]->{
          ingredient->{
            _id,
            name,
            amount,
            fraction,
            unit,
            description
          },
          _id,
          name,
          amount,
          fraction,
          unit
        }
      }`
  );
}

export async function getIngredientsForRecipe(recipeId: string) {
  const client = createClient({
    projectId: "r6nc7qm6",
    dataset: "production",
    apiVersion: "2023-05-09",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "recipe" && _id == $recipeId][0].ingredients[].ingredient->{
      _id,
      name,
      amount,
      fraction,
      unit,
      description
    }`,
    { recipeId }
  );
}