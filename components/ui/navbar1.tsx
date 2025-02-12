"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Navbar1() {
  return (
    <header className="border-b bg-background">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              🤖 Minimis AI
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link href="/models" className="text-sm font-medium hover:text-primary">
              Models
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </div>

          {/* Right - Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium hover:text-primary"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="hidden md:block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
