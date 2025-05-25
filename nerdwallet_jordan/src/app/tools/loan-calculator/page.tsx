'use client'

import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Sample bank data for each country
const bankData = {
  eg: [
    { id: 'nbe', name: 'National Bank of Egypt', logo: '/banks/nbe.png', rate: 14.5, minAmount: 5000, maxAmount: 1000000, minTerm: 6, maxTerm: 120 },
    { id: 'cib', name: 'Commercial International Bank', logo: '/banks/cib.png', rate: 14.25, minAmount: 10000, maxAmount: 1500000, minTerm: 12, maxTerm: 120 },
    { id: 'qnb', name: 'QNB Alahli', logo: '/banks/qnb.png', rate: 14.75, minAmount: 7500, maxAmount: 1200000, minTerm: 6, maxTerm: 96 },
  ],
  jo: [
    { id: 'arab', name: 'Arab Bank', logo: '/banks/arab.png', rate: 5.99, minAmount: 3000, maxAmount: 150000, minTerm: 12, maxTerm: 120 },
    { id: 'housing', name: 'Housing Bank', logo: '/banks/housing.png', rate: 6.25, minAmount: 5000, maxAmount: 200000, minTerm: 12, maxTerm: 180 },
    { id: 'jordan', name: 'Bank of Jordan', logo: '/banks/jordan.png', rate: 6.5, minAmount: 2000, maxAmount: 100000, minTerm: 6, maxTerm: 84 },
  ],
  sa: [
    { id: 'ncb', name: 'Saudi National Bank', logo: '/banks/ncb.png', rate: 4.5, minAmount: 10000, maxAmount: 500000, minTerm: 12, maxTerm: 60 },
    { id: 'samba', name: 'Samba Financial Group', logo: '/banks/samba.png', rate: 4.75, minAmount: 15000, maxAmount: 750000, minTerm: 12, maxTerm: 84 },
    { id: 'rajhi', name: 'Al Rajhi Bank', logo: '/banks/rajhi.png', rate: 4.25, minAmount: 20000, maxAmount: 1000000, minTerm: 24, maxTerm: 120 },
  ]
}

export default function LoanCalculator() {
  const { selectedCountry } = useCountry()
  const [loanAmount, setLoanAmount] = useState(50000)
  const [interestRate, setInterestRate] = useState(6)
  const [loanTerm, setLoanTerm] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [amortizationSchedule, setAmortizationSchedule] = useState([])
  const [selectedBank, setSelectedBank] = useState(null)
  
  // Get banks for the selected country
  const banks = bankData[selectedCountry.id] || []
  
  // Set default interest rate based on first bank in the selected country
  useEffect(() => {
    if (banks.length > 0) {
      setInterestRate(banks[0].rate)
    }
  }, [selectedCountry])
  
  // Calculate loan details
  useEffect(() => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12
    
    // Monthly payment formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const payment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
    
    setMonthlyPayment(payment)
    setTotalPayment(payment * loanTerm)
    setTotalInterest(payment * loanTerm - loanAmount)
    
    // Generate amortization schedule
    const schedule = []
    let balance = loanAmount
    let totalInterestPaid = 0
    
    for (let month = 1; month <= Math.min(loanTerm, 360); month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = payment - interestPayment
      balance -= principalPayment
      totalInterestPaid += interestPayment
      
      if (month <= 12 || month % 12 === 0 || month === loanTerm) {
        schedule.push({
          month,
          payment,
          principalPayment,
          interestPayment,
          totalInterestPaid,
          balance: Math.max(0, balance)
        })
      }
    }
    
    setAmortizationSchedule(schedule)
  }, [loanAmount, interestRate, loanTerm])
  
  // Handle bank selection
  const handleBankSelect = (bank) => {
    setSelectedBank(bank)
    setInterestRate(bank.rate)
    
    // Adjust loan amount and term to bank limits if needed
    if (loanAmount < bank.minAmount) setLoanAmount(bank.minAmount)
    if (loanAmount > bank.maxAmount) setLoanAmount(bank.maxAmount)
    if (loanTerm < bank.minTerm) setLoanTerm(bank.minTerm)
    if (loanTerm > bank.maxTerm) setLoanTerm(bank.maxTerm)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {selectedCountry.id === 'eg' ? 'حاسبة القروض الشخصية' : 
         selectedCountry.id === 'sa' ? 'حاسبة التمويل الشخصي' : 
         'حاسبة القروض الشخصية'}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {selectedCountry.id === 'eg' ? 'احسب قسطك الشهري وقارن بين عروض البنوك المصرية' : 
         selectedCountry.id === 'sa' ? 'احسب قسطك الشهري وقارن بين عروض البنوك السعودية' : 
         'احسب قسطك الشهري وقارن بين عروض البنوك الأردنية'}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Inputs */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">تفاصيل القرض</h2>
            
            <div className="space-y-6">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">مبلغ القرض</label>
                  <span className="text-sm font-bold">
                    {formatCurrency(loanAmount, selectedCountry.id)}
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedBank?.minAmount || 1000}
                  max={selectedBank?.maxAmount || 500000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{formatCurrency(selectedBank?.minAmount || 1000, selectedCountry.id)}</span>
                  <span>{formatCurrency(selectedBank?.maxAmount || 500000, selectedCountry.id)}</span>
                </div>
              </div>
              
              {/* Interest Rate Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">معدل الفائدة السنوي</label>
                  <span className="text-sm font-bold">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={0.25}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>
              
              {/* Loan Term Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">مدة القرض (بالشهور)</label>
                  <span className="text-sm font-bold">
                    {loanTerm} شهر ({Math.floor(loanTerm / 12)} سنة و {loanTerm % 12} شهر)
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedBank?.minTerm || 6}
                  max={selectedBank?.maxTerm || 180}
                  step={6}
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{selectedBank?.minTerm || 6} شهر</span>
                  <span>{selectedBank?.maxTerm || 180} شهر</span>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">ملخص القرض</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">القسط الشهري</p>
                  <p className="text-xl font-bold text-primary">
                    {formatCurrency(monthlyPayment, selectedCountry.id)}
                  </p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">إجمالي الفوائد</p>
                  <p className="text-xl font-bold text-primary">
                    {formatCurrency(totalInterest, selectedCountry.id)}
                  </p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">إجمالي المدفوعات</p>
                  <p className="text-xl font-bold text-primary">
                    {formatCurrency(totalPayment, selectedCountry.id)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Amortization Schedule */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">جدول السداد</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="p-2 text-right">الشهر</th>
                    <th className="p-2 text-right">القسط الشهري</th>
                    <th className="p-2 text-right">أصل القرض</th>
                    <th className="p-2 text-right">الفائدة</th>
                    <th className="p-2 text-right">المتبقي</th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.map((row) => (
                    <tr key={row.month} className="border-b">
                      <td className="p-2">{row.month}</td>
                      <td className="p-2">{formatCurrency(row.payment, selectedCountry.id)}</td>
                      <td className="p-2">{formatCurrency(row.principalPayment, selectedCountry.id)}</td>
                      <td className="p-2">{formatCurrency(row.interestPayment, selectedCountry.id)}</td>
                      <td className="p-2">{formatCurrency(row.balance, selectedCountry.id)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        {/* Bank Comparison */}
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedCountry.id === 'eg' ? 'قارن بين البنوك المصرية' : 
               selectedCountry.id === 'sa' ? 'قارن بين البنوك السعودية' : 
               'قارن بين البنوك الأردنية'}
            </h2>
            <div className="space-y-4">
              {banks.map((bank) => (
                <div 
                  key={bank.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedBank?.id === bank.id ? 'border-primary bg-primary/5' : 'hover:bg-secondary/10'
                  }`}
                  onClick={() => handleBankSelect(bank)}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      {/* Bank logo would go here */}
                      <span className="text-xs">{bank.name.substring(0, 2)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{bank.name}</h3>
                      <p className="text-sm text-muted-foreground">معدل الفائدة: {bank.rate}%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">الحد الأدنى للقرض</p>
                      <p className="font-medium">{formatCurrency(bank.minAmount, selectedCountry.id)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">الحد الأقصى للقرض</p>
                      <p className="font-medium">{formatCurrency(bank.maxAmount, selectedCountry.id)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">أقل مدة</p>
                      <p className="font-medium">{bank.minTerm} شهر</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">أقصى مدة</p>
                      <p className="font-medium">{bank.maxTerm} شهر</p>
                    </div>
                  </div>
                  {selectedBank?.id === bank.id && (
                    <div className="mt-3">
                      <Button className="w-full">تقدم بطلب الآن</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
          
          {/* Tips Section */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">نصائح للحصول على أفضل قرض</h2>
            <Tabs defaultValue="tips">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tips">نصائح عامة</TabsTrigger>
                <TabsTrigger value="requirements">المتطلبات</TabsTrigger>
              </TabsList>
              <TabsContent value="tips" className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>قارن بين عروض البنوك المختلفة للحصول على أفضل سعر فائدة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>حاول سداد دفعة أولى أكبر لتقليل مبلغ القرض والفوائد</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>اختر أقصر مدة سداد ممكنة تناسب ميزانيتك لتوفير الفوائد</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>تأكد من عدم وجود رسوم خفية أو غرامات سداد مبكر</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="requirements" className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>إثبات هوية ساري المفعول</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>إثبات دخل (شهادة راتب أو كشف حساب بنكي)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>إثبات عنوان (فاتورة مرافق أو عقد إيجار)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>الحد الأدنى للدخل الشهري يختلف حسب البنك والمنتج</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
