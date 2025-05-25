'use client'

import { useState, useEffect } from 'react'
import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

export default function HomePage() {
  const { selectedCountry } = useCountry()
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Get localized text based on country
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
    return null // Prevent hydration mismatch
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
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
        
        {/* Credit Cards Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">{localizedText.sections.creditCards}</h2>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                عرض الكل <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b">
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Card Image</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">بطاقة تيتانيوم</h3>
                  <p className="text-sm text-muted-foreground mb-4">البنك الأهلي</p>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">الرسوم السنوية</p>
                      <p className="font-medium">{formatCurrency(400, selectedCountry.id)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">استرداد نقدي</p>
                      <p className="font-medium">1.5%</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">تقدم بطلب</Button>
                </div>
                <div className="p-4 bg-gray-50 text-sm">
                  <p className="font-medium text-primary">مميزات البطاقة</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>استرداد نقدي على جميع المشتريات</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>تأمين سفر مجاني</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              {/* Card 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b">
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Card Image</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">بطاقة بلاتينيوم</h3>
                  <p className="text-sm text-muted-foreground mb-4">بنك الإسكان</p>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">الرسوم السنوية</p>
                      <p className="font-medium">{formatCurrency(600, selectedCountry.id)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">استرداد نقدي</p>
                      <p className="font-medium">2.0%</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">تقدم بطلب</Button>
                </div>
                <div className="p-4 bg-gray-50 text-sm">
                  <p className="font-medium text-primary">مميزات البطاقة</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>استرداد نقدي مرتفع</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>دخول مجاني لصالات المطارات</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              {/* Card 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b">
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Card Image</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">بطاقة سيجنتشر</h3>
                  <p className="text-sm text-muted-foreground mb-4">البنك العربي</p>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">الرسوم السنوية</p>
                      <p className="font-medium">{formatCurrency(500, selectedCountry.id)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">استرداد نقدي</p>
                      <p className="font-medium">1.0%</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">تقدم بطلب</Button>
                </div>
                <div className="p-4 bg-gray-50 text-sm">
                  <p className="font-medium text-primary">مميزات البطاقة</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>نقاط مكافآت على المشتريات</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>خصومات في المطاعم والمتاجر</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">{localizedText.sections.tools}</h2>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                عرض الكل <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tool 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl font-bold">$</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">حاسبة القروض</h3>
                  <p className="text-sm text-muted-foreground mb-4">احسب قسطك الشهري وإجمالي الفوائد</p>
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                    استخدم الآن
                  </Button>
                </div>
              </Card>
              
              {/* Tool 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl font-bold">🏠</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">حاسبة الرهن العقاري</h3>
                  <p className="text-sm text-muted-foreground mb-4">احسب تكلفة قرض المنزل وخطة السداد</p>
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                    استخدم الآن
                  </Button>
                </div>
              </Card>
              
              {/* Tool 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl font-bold">💰</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">حاسبة التوفير</h3>
                  <p className="text-sm text-muted-foreground mb-4">احسب نمو مدخراتك مع مرور الوقت</p>
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                    استخدم الآن
                  </Button>
                </div>
              </Card>
              
              {/* Tool 4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl font-bold">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">محول العملات</h3>
                  <p className="text-sm text-muted-foreground mb-4">تحويل سريع بين العملات المختلفة</p>
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                    استخدم الآن
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Educational Articles Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">{localizedText.sections.education}</h2>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                عرض الكل <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Article Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">نصائح مالية</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">كيف تختار بطاقة الائتمان المناسبة لك؟</h3>
                  <p className="text-sm text-muted-foreground mb-4">دليل شامل لاختيار بطاقة الائتمان التي تناسب احتياجاتك ونمط حياتك</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    اقرأ المزيد <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                </div>
              </Card>
              
              {/* Article 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Article Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">استثمار</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">أساسيات الاستثمار للمبتدئين</h3>
                  <p className="text-sm text-muted-foreground mb-4">كل ما تحتاج معرفته لبدء رحلة الاستثمار بثقة وأمان</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    اقرأ المزيد <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                </div>
              </Card>
              
              {/* Article 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Article Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">توفير</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">10 طرق لتوفير المال في الحياة اليومية</h3>
                  <p className="text-sm text-muted-foreground mb-4">نصائح عملية لتقليل المصاريف وزيادة المدخرات دون التأثير على نمط حياتك</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    اقرأ المزيد <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Banks Comparison Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">قارن بين البنوك</h2>
            
            <Tabs defaultValue="personal-loans" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="personal-loans" className="text-primary data-[state=active]:bg-primary data-[state=active]:text-white">
                  {localizedText.sections.loans}
                </TabsTrigger>
                <TabsTrigger value="mortgages" className="text-primary data-[state=active]:bg-primary data-[state=active]:text-white">
                  {localizedText.sections.mortgages}
                </TabsTrigger>
                <TabsTrigger value="savings" className="text-primary data-[state=active]:bg-primary data-[state=active]:text-white">
                  {localizedText.sections.savings}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal-loans">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-3 text-right">البنك</th>
                        <th className="p-3 text-right">معدل الفائدة</th>
                        <th className="p-3 text-right">الحد الأقصى للقرض</th>
                        <th className="p-3 text-right">المدة القصوى</th>
                        <th className="p-3 text-right">الحد الأدنى للدخل</th>
                        <th className="p-3 text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك الأهلي</td>
                        <td className="p-3">6.5%</td>
                        <td className="p-3">{formatCurrency(100000, selectedCountry.id)}</td>
                        <td className="p-3">7 سنوات</td>
                        <td className="p-3">{formatCurrency(800, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">بنك الإسكان</td>
                        <td className="p-3">6.25%</td>
                        <td className="p-3">{formatCurrency(150000, selectedCountry.id)}</td>
                        <td className="p-3">8 سنوات</td>
                        <td className="p-3">{formatCurrency(900, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك العربي</td>
                        <td className="p-3">5.99%</td>
                        <td className="p-3">{formatCurrency(200000, selectedCountry.id)}</td>
                        <td className="p-3">10 سنوات</td>
                        <td className="p-3">{formatCurrency(1000, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="mortgages">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-3 text-right">البنك</th>
                        <th className="p-3 text-right">معدل الفائدة</th>
                        <th className="p-3 text-right">نسبة التمويل</th>
                        <th className="p-3 text-right">المدة القصوى</th>
                        <th className="p-3 text-right">رسوم الطلب</th>
                        <th className="p-3 text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك الأهلي</td>
                        <td className="p-3">5.5%</td>
                        <td className="p-3">80%</td>
                        <td className="p-3">25 سنة</td>
                        <td className="p-3">{formatCurrency(500, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">بنك الإسكان</td>
                        <td className="p-3">5.25%</td>
                        <td className="p-3">85%</td>
                        <td className="p-3">30 سنة</td>
                        <td className="p-3">{formatCurrency(400, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك العربي</td>
                        <td className="p-3">5.75%</td>
                        <td className="p-3">75%</td>
                        <td className="p-3">20 سنة</td>
                        <td className="p-3">{formatCurrency(600, selectedCountry.id)}</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="savings">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-3 text-right">البنك</th>
                        <th className="p-3 text-right">معدل الفائدة</th>
                        <th className="p-3 text-right">الحد الأدنى للإيداع</th>
                        <th className="p-3 text-right">فترة الاستحقاق</th>
                        <th className="p-3 text-right">السحب المبكر</th>
                        <th className="p-3 text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك الأهلي</td>
                        <td className="p-3">3.5%</td>
                        <td className="p-3">{formatCurrency(1000, selectedCountry.id)}</td>
                        <td className="p-3">سنة</td>
                        <td className="p-3">متاح مع غرامة</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">بنك الإسكان</td>
                        <td className="p-3">3.75%</td>
                        <td className="p-3">{formatCurrency(500, selectedCountry.id)}</td>
                        <td className="p-3">سنتان</td>
                        <td className="p-3">متاح مع غرامة</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-100">
                        <td className="p-3 font-medium">البنك العربي</td>
                        <td className="p-3">4.0%</td>
                        <td className="p-3">{formatCurrency(2000, selectedCountry.id)}</td>
                        <td className="p-3">3 سنوات</td>
                        <td className="p-3">غير متاح</td>
                        <td className="p-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">تفاصيل</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              احصل على أحدث النصائح المالية والعروض والمقارنات مباشرة إلى بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="px-4 py-3 w-full text-black rounded-s-md focus:outline-none mb-2 sm:mb-0"
              />
              <Button className="bg-white text-primary hover:bg-white/90 rounded-s-none">اشترك</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
