import { getRecipe } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import ingredient from "@/sanity/schemas/ingredient-schema";

export default async function kitchenTable() {
  const recipe = await getRecipe();
  // TODO: RETURN INGREDIENTS PLS
  const recipeIngredients = recipe.ingredient.map(())
  return (
    <main className="min-h-screen">
      <section>
        <Navbar />
        <h1>The Kitchen Table</h1>
        <div>
          {recipe.map((recipe: any) => (
            <div key={recipe._id}>
              <p>
                {recipe.name}
                {recipe.description}
                {recipeIngredients}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
