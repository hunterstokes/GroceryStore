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
                <div>
                    {recipe.map((recipe: any) => (
                        <div key={recipe._id}>
                            <p>
                                {recipe.name}
                                {recipe.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    )
}

