import { getRecipe } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import ingredient from "@/sanity/schemas/ingredient-schema";
import {groq} from "next-sanity";

export default async function kitchenTable() {
  const recipes = await getRecipe();
  // TODO: RETURN INGREDIENTS PLS
  
  return (
    <main className="min-h-screen">
      <section>
        <Navbar />
        <h1>The Kitchen Table</h1>
        <div className="m-autom p-5">
          {recipes.map((recipe: any) => (
            <div key={recipe._id}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <ul>
                {recipe.ingredients.map((ingredient: any) => (
                  <li key={ingredient._id}>
                    {ingredient.name} - {ingredient.amount} {ingredient.fraction} {ingredient.unit}
                  </li>
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