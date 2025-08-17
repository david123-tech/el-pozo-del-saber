"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const CoinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="16" cy="16" r="8" fill="#F59E0B" />
    <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">
      $
    </text>
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const subjects = [
    { name: "Balance de Materia y Energía", href: "/balance-materia-energia" },
    { name: "Geoquímica del Petróleo", href: "/geoquimica-petroleo" },
    { name: "Ingeniería de Yacimientos", href: "/ingenieria-yacimientos" },
  ]

  return (
    <header className="bg-card border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <CoinIcon />
            <span className="text-xl font-bold text-foreground">El Pozo del Saber</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {subjects.map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="text-foreground hover:text-yellow-400 hover:bg-accent transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium border border-transparent hover:border-yellow-400/20"
              >
                {subject.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:text-yellow-400 hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {subjects.map((subject) => (
                <Link
                  key={subject.href}
                  href={subject.href}
                  className="block text-foreground hover:text-yellow-400 hover:bg-accent transition-all duration-200 px-4 py-3 rounded-lg text-sm font-medium border border-transparent hover:border-yellow-400/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
