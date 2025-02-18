"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Navbar1() {
  return (
    <header className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50/50 via-white to-indigo-50/50">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-900 font-display">
              🤖 Minimis AI
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link href="/models" className="text-sm font-medium hover:text-indigo-600 font-mono">
              Models
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-indigo-600 font-mono">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-indigo-600 font-mono">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-indigo-600 font-mono">
              About
            </Link>
          </div>

          {/* Right - Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium hover:text-indigo-600 font-mono"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors font-mono"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
