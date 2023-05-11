import { render } from "react-dom";
import Link from "next/link";

export default function Navbar() {
    // const dropDownMenu = () => {
    //     let x = document.getElementById("dropDownMenu");
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topnav";'
    //     }
    // }

    return (
        <header className=" bg-teal-500">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Link href='/'>
                    <h1 className="text-xl fa-solid fa-home">Logo</h1> 
                </Link>
                <div className="space-x-5 sm:hidden lg:flex lg:ml-10 font-light text-sm">
                    <Link href='/about'>
                        About
                    </Link>
                    <Link href='/hours'>
                        Hours & Location
                    </Link>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </div>
                <div className="text-lg">
                    <Link href='/contact'>
                        <i className="fa-solid fa-envelope "></i>Contact
                    </Link>
                </div>
            </div >
        </header>
    )
}