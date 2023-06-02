import { getPost } from "@/sanity/sanity-utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/foot";

export default async function kitchenTable() {
  const post = await getPost();

  return (
    <main>
      <Navbar />
      <div className="newsCards">
        {post.map((post: any) => (
          <div key={post._id}>
            {post.name}
            {post.description}
            {post.recipe}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
