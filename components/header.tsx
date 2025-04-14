"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Game Development", href: "/services/game-development" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90" : "bg-white dark:bg-gray-900",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
             <img src="./image/logo.png" alt="Logo"  width={50}/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center px-3 py-2 text-sm font-medium transition-colors",
                          pathname.startsWith(item.href)
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link href={dropdownItem.href} className="w-full cursor-pointer">
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="py-2">
                      <div
                        className={cn(
                          "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md",
                          pathname.startsWith(item.href)
                            ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-200",
                        )}
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </div>
                      <div className="mt-1 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={cn(
                              "block px-3 py-2 text-sm font-medium rounded-md",
                              pathname === dropdownItem.href
                                ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-gray-800"
                                : "text-gray-600 hover:text-purple-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800",
                            )}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md",
                      pathname === item.href
                        ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-gray-800"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-gray-800",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
