'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CountrySelector } from '@/components/country-selector'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { Search, Menu, X, User } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 rtl-reverse-flex">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">مالي بلس</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl-space-x-reverse">
            <Link href="/credit-cards" className="text-sm font-medium hover:text-white/80">
              {t('nav.creditCards')}
            </Link>
            <Link href="/loans" className="text-sm font-medium hover:text-white/80">
              {t('nav.loans')}
            </Link>
            <Link href="/mortgages" className="text-sm font-medium hover:text-white/80">
              {t('nav.mortgages')}
            </Link>
            <Link href="/banking" className="text-sm font-medium hover:text-white/80">
              {t('nav.banking')}
            </Link>
            <Link href="/investing" className="text-sm font-medium hover:text-white/80">
              {t('nav.investing')}
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-white/80">
              {t('nav.tools')}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl-space-x-reverse">
            {/* Country Selector */}
            <CountrySelector />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary-foreground/10">
              <Search className="h-5 w-5" />
            </Button>

            {/* User Button */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary-foreground/10">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-foreground/10" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-foreground border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 rtl-text-right">
              <Link 
                href="/credit-cards" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.creditCards')}
              </Link>
              <Link 
                href="/loans" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.loans')}
              </Link>
              <Link 
                href="/mortgages" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.mortgages')}
              </Link>
              <Link 
                href="/banking" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.banking')}
              </Link>
              <Link 
                href="/investing" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.investing')}
              </Link>
              <Link 
                href="/tools" 
                className="text-sm font-medium py-2 text-primary hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.tools')}
              </Link>
              <div className="flex items-center space-x-4 rtl-space-x-reverse py-2">
                <Button variant="outline" size="sm" className="flex items-center rtl-reverse-flex">
                  <Search className="h-5 w-5 rtl-ml" />
                  <span>{t('nav.search')}</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center rtl-reverse-flex">
                  <User className="h-5 w-5 rtl-ml" />
                  <span>{t('nav.myAccount')}</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
