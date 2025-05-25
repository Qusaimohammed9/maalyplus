'use client'

import { useCountry } from '@/lib/country-context'
import { useLanguage } from '@/lib/language-context'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Country data
const countries = [
  { id: 'eg', name: 'مصر', nameEn: 'Egypt', flag: '/flags/egypt.png' },
  { id: 'jo', name: 'الأردن', nameEn: 'Jordan', flag: '/flags/jordan.png' },
  { id: 'sa', name: 'السعودية', nameEn: 'Saudi Arabia', flag: '/flags/saudi.png' },
]

export function CountrySelector() {
  const { selectedCountry, changeCountry } = useCountry()
  const { language, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    setIsClient(true)
  }, [])

  const selectCountry = (country) => {
    changeCountry(country.id)
    setIsOpen(false)
  }

  if (!isClient) return null // Prevent hydration mismatch

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2 px-2 py-1 text-primary-foreground hover:bg-primary-foreground/10 rtl-reverse-flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <div className="flex items-center rtl-reverse-flex">
          {selectedCountry.flag && (
            <div className="relative h-4 w-6 rtl-ml">
              <Image
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          )}
          <span className="text-sm">
            {language === 'en' ? selectedCountry.nameEn : selectedCountry.name}
          </span>
        </div>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`flex items-center w-full px-4 py-2 text-sm text-right hover:bg-gray-100 rtl-reverse-flex ${
                  selectedCountry.id === country.id ? 'bg-gray-50' : ''
                }`}
                onClick={() => selectCountry(country)}
              >
                <div className="relative h-4 w-6 rtl-ml">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="flex flex-col rtl-text-right">
                  <span className="text-primary">
                    {language === 'en' ? country.nameEn : country.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {language === 'en' ? country.name : country.nameEn}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
