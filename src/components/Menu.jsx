import Link from "next/link";

export default function Menu() {
  return (
    <nav className='mx-auto p-6 flex max-w-6xl items-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>

      <ul className="flex gap-10 text-sm">
        <li>
          <Link className='hover:text-blue-600 underline-offset-8 underline' href='/'>Home</Link>
        </li>
        <li>
          <Link className='hover:text-blue-600 underline-offset-8 underline' href='#'>Blog</Link>
        </li>
        <li>
          <Link className='hover:text-blue-600 underline-offset-8 underline' href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}