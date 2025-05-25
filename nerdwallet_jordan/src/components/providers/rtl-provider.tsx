'use client'

import { useEffect } from 'react'
import { useCountry } from '@/lib/country-context'
import { useLanguage } from '@/lib/language-context'

export default function RtlProvider({ children }) {
  const { selectedCountry } = useCountry()
  const { language } = useLanguage()
  
  useEffect(() => {
    // Apply RTL direction to HTML element based on selected language
    if (language === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
      document.body.classList.add('rtl')
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
      document.body.classList.remove('rtl')
    }
    
    return () => {
      // Cleanup function
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
      document.body.classList.remove('rtl')
    }
  }, [language, selectedCountry])
  
  return <>{children}</>
}
