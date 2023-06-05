import { getRecipe , getIngredientsForRecipe } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";

export default async function kitchenTable() {
  const recipes = await getRecipe();

  const recipeIngredients = await Promise.all(
    recipes.map(async (recipe: any) => {
      const ingredients = await getIngredientsForRecipe(recipe._id);
      return {
        ...recipe,
        ingredients,
      };
    })
  );

  return (
    <main className="min-h-screen">
      <section>
        <Navbar />
        <h1 className="text-5xl flex text-center justify-center pt-10 font-bold">The Kitchen Table</h1>

        <div className="m-autom p-5">
          {recipeIngredients.map((recipe: any) => (
            <div className="p-5" key={recipe._id}>
              <h2 className="text-2xl font-bold">{recipe.name}</h2>
              <p>{recipe.description}</p>

              <h2>Ingredients:</h2>
              <ul>
                {recipe.ingredients.map((ingredient: any) => (
                  <li className="pl-2 font-light" key={ingredient._id}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}