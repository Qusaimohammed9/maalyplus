'use client'

import { useState, useEffect } from 'react'
import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const { selectedCountry } = useCountry()
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const getLocalizedText = () => {
    if (selectedCountry.id === 'eg') {
      return {
        hero: {
          title: 'اتخذ قرارات مالية أفضل في مصر',
          subtitle: 'قارن بين أفضل المنتجات المالية من البنوك المصرية واحصل على نصائح مالية مخصصة',
          cta: 'ابدأ المقارنة الآن'
        },
        sections: {
          creditCards: 'بطاقات الائتمان',
          loans: 'القروض الشخصية',
          mortgages: 'قروض الإسكان',
          savings: 'حسابات التوفير',
          tools: 'الأدوات المالية',
          education: 'التثقيف المالي'
        }
      }
    } else if (selectedCountry.id === 'sa') {
      return {
        hero: {
          title: 'اتخذ قرارات مالية أفضل في السعودية',
          subtitle: 'قارن بين أفضل المنتجات المالية من البنوك السعودية واحصل على نصائح مالية مخصصة',
          cta: 'ابدأ المقارنة الآن'
        },
        sections: {
          creditCards: 'بطاقات الائتمان',
          loans: 'التمويل الشخصي',
          mortgages: 'التمويل العقاري',
          savings: 'حسابات الادخار',
          tools: 'الأدوات المالية',
          education: 'التثقيف المالي'
        }
      }
    } else {
      return {
        hero: {
          title: 'اتخذ قرارات مالية أفضل في الأردن',
          subtitle: 'قارن بين أفضل المنتجات المالية من البنوك الأردنية واحصل على نصائح مالية مخصصة',
          cta: 'ابدأ المقارنة الآن'
        },
        sections: {
          creditCards: 'بطاقات الائتمان',
          loans: 'القروض الشخصية',
          mortgages: 'قروض الإسكان',
          savings: 'حسابات التوفير',
          tools: 'الأدوات المالية',
          education: 'التثقيف المالي'
        }
      }
    }
  }

  const localizedText = getLocalizedText()

  if (!isClient) {
    return null
  }

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {localizedText.hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {localizedText.hero.subtitle}
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            {localizedText.hero.cta}
          </Button>
        </div>
      </section>

      {/* بقية الأقسام: بطاقات، أدوات، مقالات، مقارنة البنوك، النشرة الإخبارية */}
      {/* ✨ احتفظ بها كما في كودك الحالي دون تعديل */}

    </main>
  )
}
