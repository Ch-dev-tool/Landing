'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Menu } from 'lucide-react'
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import navItems  from '../../shared/links'


export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const DesktopMenu = () => (
    <ul className="flex space-x-6">
      {navItems.map((item, index) => (
        <li key={item.name}>
          <a href={item.href} 
          className="relative px-3 py-2 transition duration-300 ease-in-out">
            <motion.span
              className="relative z-10"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {item.name}
            </motion.span>
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-md z-0"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  )

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-2 py-1 text-lg"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 text-xl font-bold">
            <Code size={24} className="text-[#fca700]" />
            <span>Ch_Dev_tool</span>
          </a>
          <nav className="hidden md:block">
            <DesktopMenu />
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
