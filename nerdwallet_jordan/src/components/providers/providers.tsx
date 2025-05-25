'use client'

import { useState, useEffect } from 'react'
import { CountryProvider } from '@/components/providers/country-provider'
import { RtlProvider } from '@/components/providers/rtl-provider'
import { LanguageProvider } from '@/lib/language-context'

export default function Providers({ children }) {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) {
    // Return a minimal version during server-side rendering to prevent hydration issues
    return <>{children}</>
  }
  
  return (
    <LanguageProvider>
      <CountryProvider>
        <RtlProvider>
          {children}
        </RtlProvider>
      </CountryProvider>
    </LanguageProvider>
  )
}
