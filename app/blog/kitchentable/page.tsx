import { getRecipe } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import ingredient from "@/sanity/schemas/ingredient-schema";
import {groq} from "next-sanity";

export default async function kitchenTable() {
  const recipes = await getRecipe();
  // TODO: RETURN INGREDIENTS PLS
    
  const recipeIngredients = await Promise.all(
    recipes.map(async (recipe: any) => {
      const ingredients = await Promise.all(
        recipe.ingredients.map(async (ingredientRef: any) => {
          const ingredientData = await groq`*[_type == "ingredient" == "${ingredientRef}"][0]`;
          if (ingredientData) {
            return ingredientData;
          } else {
            return null;
          }
        })
      );
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
        <h1>The Kitchen Table</h1>
        <div className="m-autom p-5">
          {recipeIngredients.map((recipe: any) => (
            <div key={recipe._id}>
              <p className=" inline-block">
                {recipe.name}
                <br></br>
                {recipe.description}
                <br></br>
                {recipe.instructions}
                <br></br>
                {recipe.ingredients.map((ingredient: any) => (
                  <span key={ingredient?._id}>{ingredient?.name}
                  {ingredient?.description}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}