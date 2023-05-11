import { render } from "react-dom";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className=" bg-teal-500">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <Link href='/'>
                        <h1 className="text-xl fa-solid fa-home">Logo</h1> 
                    </Link>
                    <div className="md:hidden space-x-10 lg:flex lg:ml-10">
                        <Link href='/about'>
                            about
                        </Link>
                        <Link href='/hours'>
                            hours & location
                        </Link>
                        <Link href='/blog'>
                            blog
                        </Link>
                    </div>
                        <div className="">
                        <Link href='/contact'>
                            Contact
                            <i className="fa-solid fa-envelope"></i>
                        </Link>
                        </div>
            </nav >
        </header>
    )
}