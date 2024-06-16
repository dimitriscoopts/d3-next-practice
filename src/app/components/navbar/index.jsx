import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='m-5 flex justify-around'>
      <Link href="/">HOME</Link>
      <Link href="/dashboard">DASHBOARD</Link>
      <Link href="/csscolors">CSS COLORS</Link>
      <Link href="/dotfollow">DOT FOLLOW</Link>
      <Link href="/barchart">BARCHART</Link>
    </nav>
  )
}
