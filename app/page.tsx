import Image from 'next/image'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    
    <main className="min-h-screen items-center p-24">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">This is my new page :) </h1>
      <ol className="list-decimal list-inside text-2xl font-bold grid grid-flow-row justify-between" > Tasks
        <li>Navbar</li>
        <li>Hero Section</li>
        <li>About/Hours</li>
        <li>components building</li>
        <li>Figure out blog crap</li>
        <li>Department sections client rendering</li>
        <li>newsletter sign up</li>
      </ol>
      </main>
  )
}
