import Image from 'next/image'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    
    <main className="m-0">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">Piedmont Grocery</h1>
      <br />

      <br />
      <ol className="list-decimal list-inside text-2xl font-bold grid grid-flow-row justify-between" > Tasks
        <li><i className='fa-solid fa-home'></i>Navbar</li>
        <li><i className='fa-solid fa-object-group'></i>Hero Section</li>
        <li><i className=''></i>About/Hours</li>
        <li>components building</li>
        <li><i className='fa-solid fa-pencil'></i>Figure out blog crap</li>
        <li>Department sections client rendering</li>
        <li>newsletter sign up</li>
      </ol>
      </main>
  )
}
