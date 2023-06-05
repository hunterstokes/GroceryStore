import Navbar from "@/components/navbar";
import Footer from "@/components/foot";
import { getRecipe } from "@/sanity/sanity-utils";
import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <section>
        <Navbar />
        <h1>
            <Link href='blog/kitchentable'>Blog</Link></h1>

      </section>
    </main>
  );
}
