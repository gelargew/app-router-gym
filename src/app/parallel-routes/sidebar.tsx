'use client'

import Link from 'next/link'
import { Home, BarChart2, Users, FileWarning } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export function Sidebar() {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const linksRef = useRef<HTMLAnchorElement[]>([])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % linksRef.current.length)
    } else if (event.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) => (prevIndex - 1 + linksRef.current.length) % linksRef.current.length)
    }
  }

  useEffect(() => {
    linksRef.current[focusedIndex]?.focus()
  }, [focusedIndex])

  return (
    <div className="w-64 bg-background border-r h-full p-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <nav className="space-y-2">
        {[
          { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
          { href: '/slide', label: 'Slide', icon: <BarChart2 className="w-5 h-5" /> },
          { href: '/error', label: 'Error', icon: <FileWarning className="w-5 h-5" /> },
          { href: '/suspense', label: 'Suspense', icon: <Users className="w-5 h-5" /> },
          { href: '/parallel-routes', label: 'Parallel Routes', icon: <Users className="w-5 h-5" /> },
          { href: '/redirect', label: 'Redirect', icon: <Users className="w-5 h-5" /> },
          { href: '/photos', label: 'Intercepting Route', icon: <Users className="w-5 h-5" /> },
        ].map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded"
            // @ts-expect-error no fix
            ref={(el) => (linksRef.current[index] = el!)}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

    </div>
  )
}
