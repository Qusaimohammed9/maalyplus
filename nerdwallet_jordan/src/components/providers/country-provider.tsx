'use client'

import { useState, useEffect } from 'react'
import { CountryContext } from '@/lib/country-context'
import { countries } from '@/lib/countries-data'

export default function CountryProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[1]) // Default to Jordan
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    setIsClient(true)
    
    // Check for saved country preference
    const savedCountry = localStorage.getItem('selectedCountry')
    if (savedCountry) {
      const country = countries.find(c => c.id === savedCountry)
      if (country) setSelectedCountry(country)
    } else {
      // Could implement geolocation detection here
      // For now, default to Jordan
    }
  }, [])

  const changeCountry = (countryId) => {
    const country = countries.find(c => c.id === countryId)
    if (country) {
      setSelectedCountry(country)
      if (isClient) {
        localStorage.setItem('selectedCountry', country.id)
      }
    }
  }

  // Don't render anything on the server to prevent hydration mismatch
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <CountryContext.Provider value={{ 
      selectedCountry, 
      changeCountry,
      countries
    }}>
      {children}
    </CountryContext.Provider>
  )
}
