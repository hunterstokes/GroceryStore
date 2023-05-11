import { render } from "react-dom";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="top-0 m-0">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 top-0 sticky">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    <h1>Logo</h1>
                    <span className="text-sm justify-between">Links 
                        <Link href='/about'>
                            about filler
                        </Link>
                        <Link href='/hours'>
                            hours + location filler
                        </Link>
                        <Link href='/blog'>
                            blog filler
                        </Link>
                    </span>
                </span>
            </div>
        </nav >
        </div>
    )
}