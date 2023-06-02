import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import { getRecipe } from "@/sanity/sanity-utils";

<<<<<<< HEAD
export default function Blog() {
  return (
    <main>
      <section>
        <Navbar />
        <h1>Blog</h1>
      </section>
    </main>
  );
}
=======
export default async function Blog() {

    const recipe = await getRecipe();
    return (
        <main>
            <section>
                <Navbar />
                <h1>Blog</h1>
                <div className="newsCards">
                {recipe.map((recipe) => (
                    <div key={recipe._id}>
                        {recipe.name}{recipe.description}
                    </div>
                ))}
            </div>
            </section>
        </main>
    )
}
>>>>>>> 7f30d845f3a2da08e58b4cc182dba065c1dfe160
