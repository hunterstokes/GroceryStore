import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import { getRecipe } from "@/sanity/sanity-utils"


export default async function News() {

    const recipe = await getRecipe();
    return (
        <main className="min-h-screen">
            <section >
                <Navbar />
                <h1>News</h1>
           <div className="newsCards">
                {recipe.map((recipe) => (
                    <div key={recipe._id}>
                        {recipe.name}{recipe.description}
                    </div>
                ))}
            </div>
            </section>
            <Footer />
        </main>
    )
}

