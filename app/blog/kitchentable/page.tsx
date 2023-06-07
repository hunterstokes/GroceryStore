import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import { getAltSchema } from "@/sanity/sanity-utils";


export default async function fakeBlog() {

  const blogPost = await getAltSchema();


  return (
    <main className="min-h-screen">
      <section>
        <Navbar />
        <h1 className="text-6xl text-center m-3">Kitchen Table</h1>

        <div className="m-autom m-5">
          {blogPost.map((post: any) => (
            <div className="m-5 p-2 bg-black box-content border-2 rounded-xl" key={post._id}>
              <h2 className="text-3xl font-bold">{post.name}</h2>
              <p className="font-thin">{post.content}</p>
              <img src={post.image?.asset?.url} alt={post.image?.alt} />
              <p>Recipe: {post.recipe}</p>
              <h2>Ingredients:</h2>
              <ul className=" italic">
                {Array.isArray(post.ingredients) ? (
                  post.ingredients.map((ingredient: string, index: number) => (
                    <li key={index}>- {ingredient}</li>
                  ))
                ) : (
                  <li>No ingredients available</li>
                )}
              </ul>
              <p>Instructions: {post.instructions}</p>
            </div>
          ))}
        </div>

        <Footer />
      </section>
    </main>
  );
}