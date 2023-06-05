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
        _createdAt,
        name,
        description,
        ingredients[]->{
          ingredient->{
            id,
            name,
            description,
          },
          _id,
          name,
          description,
          amount,
          fraction,
          unit,
        },
}`,
  );
}

