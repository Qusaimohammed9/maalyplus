'use client'

import { useState, useEffect } from 'react'
import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Filter, ArrowRight, Star, StarHalf } from 'lucide-react'

// تم حذف التكرارات غير الضرورية مثل Header و Footer لأنهما موجودان في RootLayout
// وتم الحفاظ على المحتوى الأساسي للمقارنة دون تكرار الهيكل العام

export default function CreditCardComparison() {
  const { selectedCountry } = useCountry()
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])

  useEffect(() => {
    const creditCardData = {
      eg: [...], // بيانات مصر
      jo: [...], // بيانات الأردن
      sa: [...]  // بيانات السعودية
    }
    setCards(creditCardData[selectedCountry.id] || [])
  }, [selectedCountry])

  useEffect(() => {
    setFilteredCards(cards)
  }, [cards])

  const localizedText = {
    title: selectedCountry.id === 'sa' ? 'مقارنة بطاقات الائتمان في السعودية' :
           selectedCountry.id === 'eg' ? 'مقارنة بطاقات الائتمان في مصر' :
           'مقارنة بطاقات الائتمان في الأردن',
    subtitle: 'قارن بين أفضل بطاقات الائتمان حسب الدولة المحددة'
  }

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-center">{localizedText.title}</h1>
        <p className="text-center text-muted-foreground mb-8">{localizedText.subtitle}</p>
        {/* عرض البطاقات هنا */}
      </div>
    </main>
  )
}
