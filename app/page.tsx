import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/foot'
import Link from 'next/link'
import { url } from 'inspector'

export default function Home() {
  return (
    
    <main className="min-h-screen m-0 bg-gradient-to-br from-slate-700 to-green-800 ">
      <Navbar />
        <section className='grid p-5 grid-cols-2 gap-10 max-[800px]:grid-cols-1 align-middle'>
          <div className='ml-10 max-[500px]:mx-5 p-5 rounded-2xl border-2'><h1 className="text-6xl pb-5 font-bold">Piedmont Grocery</h1><h3 className="text-3xl font-thin">Dedicated to bringing you the best and freshest ingredients. And then another bullshit sentance </h3></div>
        <div className='mr-10 ml-0 font-thin text-xl rounded-2xl px-5 py-10 max-[500px]:mx-5'>
        <p className='text-center '> This is the new replacement for the list to see how responsive the website is. 
        Navbar is set up just still needs styling
        The hero sections is coming along and i think i should write out the content before styling
 
        About section has not been touched, route is set
        link the blog to a styled post
          department sections in one page with relative paths "#"
        </p>
        </div>
      </section>
      <section>
        <h2></h2>
      </section>
      <section className='grid mx-10 grid-cols-3 p-5 max-[800px]:grid-cols-1 align-middle'>
        <div className='p-3 justify-center'>
            <h1 className="text-5xl p-3 rounded-2xl text-start justify-start">About Us</h1>
            </div>
            <div className='p-3 col-span-2 border-2 rounded-md bg-white text-green-900 bg-opacity-70'>
            <p className='p-3'>
                For many years, it's been our goal to offer the very best products we can find. Along the way, we created the tastiest take out bar on Piedmont Avenue, expanded our horizons to find the best products all over the world. In doing this we ushered in the Bay Area's obsession with fresh, seasonal, and, of course, local food.
                <br></br>
                We are part gourmet grocery store, carrying items such as truffle paste, fleur de sel, and umami paste. We also stock the foods that the whole family will love. At Piedmont Grocery we never forget that we are a full-service grocery store. Our store provides everything from cleaning supplies and paper goods, to cereal and baking products. For more than 100 years, Piedmont Grocery has been the family run market for the freshest and highest quality ingredients.
         </p>
         
        </div>
        </section>
        <Footer />
      </main>
  )
}
