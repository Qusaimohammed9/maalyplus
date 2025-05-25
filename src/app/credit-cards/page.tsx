'use client'

import { useState, useEffect } from 'react'
import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Filter, ArrowRight, Star, StarHalf } from 'lucide-react'

// Sample credit card data for each country
const creditCardData = {
  eg: [
    { 
      id: 'nbe-titanium', 
      bank: 'National Bank of Egypt', 
      name: 'Titanium Credit Card', 
      logo: '/banks/nbe.png',
      image: '/cards/titanium.png',
      annualFee: 400,
      interestRate: 24.5,
      minIncome: 5000,
      cashback: 1.5,
      travelInsurance: true,
      airportLounge: false,
      rating: 4.2,
      category: 'cashback'
    },
    { 
      id: 'cib-platinum', 
      bank: 'Commercial International Bank', 
      name: 'Platinum MasterCard', 
      logo: '/banks/cib.png',
      image: '/cards/platinum.png',
      annualFee: 600,
      interestRate: 23.75,
      minIncome: 8000,
      cashback: 0,
      travelInsurance: true,
      airportLounge: true,
      rating: 4.5,
      category: 'travel'
    },
    { 
      id: 'qnb-gold', 
      bank: 'QNB Alahli', 
      name: 'Gold Visa Card', 
      logo: '/banks/qnb.png',
      image: '/cards/gold.png',
      annualFee: 300,
      interestRate: 25.0,
      minIncome: 4000,
      cashback: 1.0,
      travelInsurance: false,
      airportLounge: false,
      rating: 3.8,
      category: 'standard'
    },
  ],
  jo: [
    { 
      id: 'arab-visa-platinum', 
      bank: 'Arab Bank', 
      name: 'Visa Platinum', 
      logo: '/banks/arab.png',
      image: '/cards/platinum.png',
      annualFee: 75,
      interestRate: 19.99,
      minIncome: 1000,
      cashback: 2.0,
      travelInsurance: true,
      airportLounge: true,
      rating: 4.7,
      category: 'cashback'
    },
    { 
      id: 'housing-world-elite', 
      bank: 'Housing Bank', 
      name: 'World Elite MasterCard', 
      logo: '/banks/housing.png',
      image: '/cards/world-elite.png',
      annualFee: 150,
      interestRate: 18.5,
      minIncome: 2500,
      cashback: 0,
      travelInsurance: true,
      airportLounge: true,
      rating: 4.6,
      category: 'travel'
    },
    { 
      id: 'jordan-visa-signature', 
      bank: 'Bank of Jordan', 
      name: 'Visa Signature', 
      logo: '/banks/jordan.png',
      image: '/cards/signature.png',
      annualFee: 60,
      interestRate: 20.5,
      minIncome: 800,
      cashback: 1.5,
      travelInsurance: false,
      airportLounge: false,
      rating: 4.0,
      category: 'standard'
    },
  ],
  sa: [
    { 
      id: 'ncb-visa-infinite', 
      bank: 'Saudi National Bank', 
      name: 'Visa Infinite', 
      logo: '/banks/ncb.png',
      image: '/cards/infinite.png',
      annualFee: 1000,
      interestRate: 0, // Islamic banking - no interest
      minIncome: 15000,
      cashback: 2.5,
      travelInsurance: true,
      airportLounge: true,
      rating: 4.8,
      category: 'premium'
    },
    { 
      id: 'samba-signature', 
      bank: 'Samba Financial Group', 
      name: 'Signature Credit Card', 
      logo: '/banks/samba.png',
      image: '/cards/signature.png',
      annualFee: 600,
      interestRate: 0, // Islamic banking - no interest
      minIncome: 10000,
      cashback: 2.0,
      travelInsurance: true,
      airportLounge: true,
      rating: 4.5,
      category: 'cashback'
    },
    { 
      id: 'rajhi-gold', 
      bank: 'Al Rajhi Bank', 
      name: 'Gold Credit Card', 
      logo: '/banks/rajhi.png',
      image: '/cards/gold.png',
      annualFee: 400,
      interestRate: 0, // Islamic banking - no interest
      minIncome: 7000,
      cashback: 1.0,
      travelInsurance: false,
      airportLounge: false,
      rating: 4.2,
      category: 'standard'
    },
  ]
}

export default function CreditCardComparison() {
  const { selectedCountry } = useCountry()
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [filters, setFilters] = useState({
    category: 'all',
    annualFee: 'all',
    cashback: 'all',
    travelBenefits: false
  })
  const [showComparison, setShowComparison] = useState(false)
  
  // Get cards for the selected country
  useEffect(() => {
    const countryCards = creditCardData[selectedCountry.id] || []
    setCards(countryCards)
    setFilteredCards(countryCards)
    setSelectedCards([])
    setShowComparison(false)
  }, [selectedCountry])
  
  // Apply filters
  useEffect(() => {
    let result = [...cards]
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(card => card.category === filters.category)
    }
    
    // Filter by annual fee
    if (filters.annualFee === 'free') {
      result = result.filter(card => card.annualFee === 0)
    } else if (filters.annualFee === 'low') {
      result = result.filter(card => card.annualFee > 0 && card.annualFee <= 100)
    } else if (filters.annualFee === 'medium') {
      result = result.filter(card => card.annualFee > 100 && card.annualFee <= 500)
    } else if (filters.annualFee === 'high') {
      result = result.filter(card => card.annualFee > 500)
    }
    
    // Filter by cashback
    if (filters.cashback === 'yes') {
      result = result.filter(card => card.cashback > 0)
    } else if (filters.cashback === 'high') {
      result = result.filter(card => card.cashback >= 2)
    }
    
    // Filter by travel benefits
    if (filters.travelBenefits) {
      result = result.filter(card => card.travelInsurance || card.airportLounge)
    }
    
    setFilteredCards(result)
  }, [filters, cards])
  
  // Handle card selection for comparison
  const toggleCardSelection = (card) => {
    if (selectedCards.some(c => c.id === card.id)) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id))
    } else {
      if (selectedCards.length < 3) {
        setSelectedCards([...selectedCards, card])
      }
    }
  }
  
  // Handle filter changes
  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value
    })
  }
  
  // Get localized text based on country
  const getLocalizedText = () => {
    if (selectedCountry.id === 'eg') {
      return {
        title: 'مقارنة بطاقات الائتمان في مصر',
        subtitle: 'قارن بين أفضل بطاقات الائتمان من البنوك المصرية',
        noInterest: 'معدل الفائدة',
        annualFee: 'الرسوم السنوية',
        minIncome: 'الحد الأدنى للدخل',
        cashback: 'استرداد نقدي',
        travelInsurance: 'تأمين سفر',
        airportLounge: 'دخول صالات المطار',
        compare: 'قارن',
        apply: 'تقدم بطلب',
        selectToCompare: 'اختر للمقارنة'
      }
    } else if (selectedCountry.id === 'sa') {
      return {
        title: 'مقارنة بطاقات الائتمان في السعودية',
        subtitle: 'قارن بين أفضل بطاقات الائتمان من البنوك السعودية',
        noInterest: 'هامش الربح',
        annualFee: 'الرسوم السنوية',
        minIncome: 'الحد الأدنى للدخل',
        cashback: 'استرداد نقدي',
        travelInsurance: 'تأمين سفر',
        airportLounge: 'دخول صالات المطار',
        compare: 'قارن',
        apply: 'تقدم بطلب',
        selectToCompare: 'اختر للمقارنة'
      }
    } else {
      return {
        title: 'مقارنة بطاقات الائتمان في الأردن',
        subtitle: 'قارن بين أفضل بطاقات الائتمان من البنوك الأردنية',
        noInterest: 'معدل الفائدة',
        annualFee: 'الرسوم السنوية',
        minIncome: 'الحد الأدنى للدخل',
        cashback: 'استرداد نقدي',
        travelInsurance: 'تأمين سفر',
        airportLounge: 'دخول صالات المطار',
        compare: 'قارن',
        apply: 'تقدم بطلب',
        selectToCompare: 'اختر للمقارنة'
      }
    }
  }
  
  const localizedText = getLocalizedText()
  
  // Render star rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">{rating.toFixed(1)}</span>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2 text-center">{localizedText.title}</h1>
          <p className="text-center text-muted-foreground mb-8">{localizedText.subtitle}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters */}
            <div className="lg:col-span-1">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">الفلترة</h2>
                  <Filter className="h-5 w-5" />
                </div>
                
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-2">نوع البطاقة</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={filters.category}
                      onChange={(e) => updateFilter('category', e.target.value)}
                    >
                      <option value="all">جميع البطاقات</option>
                      <option value="cashback">استرداد نقدي</option>
                      <option value="travel">سفر</option>
                      <option value="standard">قياسية</option>
                      <option value="premium">بريميوم</option>
                    </select>
                  </div>
                  
                  {/* Annual Fee Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-2">الرسوم السنوية</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={filters.annualFee}
                      onChange={(e) => updateFilter('annualFee', e.target.value)}
                    >
                      <option value="all">جميع الرسوم</option>
                      <option value="free">مجانية</option>
                      <option value="low">منخفضة (حتى 100 {selectedCountry.currencySymbol})</option>
                      <option value="medium">متوسطة (100-500 {selectedCountry.currencySymbol})</option>
                      <option value="high">مرتفعة (أكثر من 500 {selectedCountry.currencySymbol})</option>
                    </select>
                  </div>
                  
                  {/* Cashback Filter */}
                  <div>
                    <label className="text-sm font-medium block mb-2">استرداد نقدي</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={filters.cashback}
                      onChange={(e) => updateFilter('cashback', e.target.value)}
                    >
                      <option value="all">الكل</option>
                      <option value="yes">تقدم استرداد نقدي</option>
                      <option value="high">استرداد نقدي عالي (2%+)</option>
                    </select>
                  </div>
                  
                  {/* Travel Benefits Filter */}
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="travelBenefits" 
                      className="h-4 w-4 mr-2"
                      checked={filters.travelBenefits}
                      onChange={(e) => updateFilter('travelBenefits', e.target.checked)}
                    />
                    <label htmlFor="travelBenefits" className="text-sm font-medium">
                      مزايا السفر فقط
                    </label>
                  </div>
                  
                  {/* Reset Filters */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setFilters({
                      category: 'all',
                      annualFee: 'all',
                      cashback: 'all',
                      travelBenefits: false
                    })}
                  >
                    إعادة ضبط الفلاتر
                  </Button>
                </div>
              </Card>
              
              {/* Selected Cards Count */}
              <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm font-medium mb-2">
                  البطاقات المختارة للمقارنة: {selectedCards.length}/3
                </p>
                {selectedCards.length > 1 && (
                  <Button 
                    className="w-full"
                    onClick={() => setShowComparison(true)}
                  >
                    {localizedText.compare}
                  </Button>
                )}
              </div>
            </div>
            
            {/* Card Listings */}
            <div className="lg:col-span-3">
              {filteredCards.length === 0 ? (
                <div className="text-center p-8 bg-secondary/10 rounded-lg">
                  <p className="text-lg font-medium">لا توجد بطاقات تطابق معايير البحث</p>
                  <p className="text-sm text-muted-foreground mt-2">يرجى تعديل الفلاتر للحصول على نتائج</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredCards.map((card) => (
                    <Card key={card.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Card Image */}
                        <div className="w-full md:w-1/3 bg-gray-100 p-6 flex items-center justify-center">
                          <div className="h-40 w-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-sm text-gray-500">{card.name}</span>
                          </div>
                        </div>
                        
                        {/* Card Details */}
                        <div className="w-full md:w-2/3 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold">{card.name}</h3>
                              <p className="text-sm text-muted-foreground">{card.bank}</p>
                              {renderRating(card.rating)}
                            </div>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id={`compare-${card.id}`} 
                                className="h-4 w-4 mr-2"
                                checked={selectedCards.some(c => c.id === card.id)}
                                onChange={() => toggleCardSelection(card)}
                                disabled={selectedCards.length >= 3 && !selectedCards.some(c => c.id === card.id)}
                              />
                              <label htmlFor={`compare-${card.id}`} className="text-xs">
                                {localizedText.selectToCompare}
                              </label>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.annualFee}</p>
                              <p className="font-medium">
                                {card.annualFee === 0 ? 'مجاناً' : formatCurrency(card.annualFee, selectedCountry.id)}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.noInterest}</p>
                              <p className="font-medium">
                                {card.interestRate === 0 ? 'متوافق مع الشريعة' : `${card.interestRate}%`}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.cashback}</p>
                              <p className="font-medium">
                                {card.cashback === 0 ? 'لا يوجد' : `${card.cashback}%`}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.minIncome}</p>
                              <p className="font-medium">{formatCurrency(card.minIncome, selectedCountry.id)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.travelInsurance}</p>
                              <p className="font-medium">{card.travelInsurance ? 'نعم' : 'لا'}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{localizedText.airportLounge}</p>
                              <p className="font-medium">{card.airportLounge ? 'نعم' : 'لا'}</p>
                            </div>
                          </div>
                          
                          <Button className="w-full md:w-auto">
                            {localizedText.apply}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Comparison Modal */}
          {showComparison && selectedCards.length > 1 && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">مقارنة البطاقات</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowComparison(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-secondary/20">
                          <th className="p-3 text-right"></th>
                          {selectedCards.map((card) => (
                            <th key={card.id} className="p-3 text-center">
                              <div className="h-24 w-40 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <span className="text-xs text-gray-500">{card.name}</span>
                              </div>
                              <h3 className="font-semibold">{card.name}</h3>
                              <p className="text-xs text-muted-foreground">{card.bank}</p>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.annualFee}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {card.annualFee === 0 ? 'مجاناً' : formatCurrency(card.annualFee, selectedCountry.id)}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.noInterest}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {card.interestRate === 0 ? 'متوافق مع الشريعة' : `${card.interestRate}%`}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.cashback}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {card.cashback === 0 ? 'لا يوجد' : `${card.cashback}%`}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.minIncome}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {formatCurrency(card.minIncome, selectedCountry.id)}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.travelInsurance}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {card.travelInsurance ? 'نعم' : 'لا'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">{localizedText.airportLounge}</td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              {card.airportLounge ? 'نعم' : 'لا'}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="p-3"></td>
                          {selectedCards.map((card) => (
                            <td key={card.id} className="p-3 text-center">
                              <Button className="w-full">
                                {localizedText.apply}
                              </Button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
