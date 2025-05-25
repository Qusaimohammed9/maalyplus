import { createContext, useContext } from 'react'

// Default context value
const defaultContextValue = {
  selectedCountry: { id: 'jo', name: 'الأردن', nameEn: 'Jordan', flag: '/flags/jordan.png' },
  changeCountry: () => {},
  countries: []
}

export const CountryContext = createContext(defaultContextValue)

export const useCountry = () => useContext(CountryContext)
