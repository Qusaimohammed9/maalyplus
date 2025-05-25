export const countries = [
  { 
    id: 'eg', 
    name: 'مصر', 
    nameEn: 'Egypt', 
    flag: '/flags/egypt.png',
    currency: 'EGP',
    currencySymbol: 'ج.م',
    locale: 'ar-EG',
    direction: 'rtl'
  },
  { 
    id: 'jo', 
    name: 'الأردن', 
    nameEn: 'Jordan', 
    flag: '/flags/jordan.png',
    currency: 'JOD',
    currencySymbol: 'د.أ',
    locale: 'ar-JO',
    direction: 'rtl'
  },
  { 
    id: 'sa', 
    name: 'السعودية', 
    nameEn: 'Saudi Arabia', 
    flag: '/flags/saudi.png',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    locale: 'ar-SA',
    direction: 'rtl'
  },
]

// Helper function to format currency based on country
export const formatCurrency = (amount, countryId) => {
  const country = countries.find(c => c.id === countryId) || countries[1]; // Default to Jordan
  
  return new Intl.NumberFormat(country.locale, {
    style: 'currency',
    currency: country.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
}

// Helper function to get country data by ID
export const getCountryById = (countryId) => {
  return countries.find(c => c.id === countryId) || countries[1]; // Default to Jordan
}
