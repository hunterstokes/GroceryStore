import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import { getAltSchema } from "@/sanity/sanity-utils";


export default async function fakeBlog() {

  const blogPost = await getAltSchema();

  console.log(blogPost);


  return (
    <main className="min-h-screen">
      <section>
        <Navbar />
        <h1>BlogBS</h1>

        <div className="m-autom p-5">
          {blogPost.map((post: any) => (
            <div className="p-5" key={post._id}>
              <h2 className="text-2xl font-bold">{post.name}</h2>
              <p>{post.content}</p>
              <img src={post.image?.asset?.url} alt={post.image?.alt} />
              <p>Recipe: {post.recipe}</p>
              <h2>Ingredients:</h2>
              <ul>
                {Array.isArray(post.ingredients) ? (
                  post.ingredients.map((ingredient: string, index: number) => (
                    <li key={index}>{ingredient}</li>
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