import { getRecipe } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";

export default async function kitchenTable() {
  const recipe = await getRecipe();

  return (
    <main>
      <Navbar />
      <div className="newsCards">
        {recipe.map((recipe) => (
          <div key={recipe._id}>
            {recipe.name}
            {recipe.description}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
