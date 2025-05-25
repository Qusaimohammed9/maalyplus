'use client'

import { useCountry } from '@/lib/country-context'
import { formatCurrency } from '@/lib/countries-data'
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

  const banks = bankData[selectedCountry.id] || []

  useEffect(() => {
    if (banks.length > 0) {
      setInterestRate(banks[0].rate)
    }
  }, [selectedCountry])

  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12
    const payment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
    setMonthlyPayment(payment)
    setTotalPayment(payment * loanTerm)
    setTotalInterest(payment * loanTerm - loanAmount)

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

  const handleBankSelect = (bank) => {
    setSelectedBank(bank)
    setInterestRate(bank.rate)
    if (loanAmount < bank.minAmount) setLoanAmount(bank.minAmount)
    if (loanAmount > bank.maxAmount) setLoanAmount(bank.maxAmount)
    if (loanTerm < bank.minTerm) setLoanTerm(bank.minTerm)
    if (loanTerm > bank.maxTerm) setLoanTerm(bank.maxTerm)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {selectedCountry.id === 'eg' ? 'حاسبة القروض الشخصية' : selectedCountry.id === 'sa' ? 'حاسبة التمويل الشخصي' : 'حاسبة القروض الشخصية'}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {selectedCountry.id === 'eg' ? 'احسب قسطك الشهري وقارن بين عروض البنوك المصرية' : selectedCountry.id === 'sa' ? 'احسب قسطك الشهري وقارن بين عروض البنوك السعودية' : 'احسب قسطك الشهري وقارن بين عروض البنوك الأردنية'}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ... المحتوى كما هو */}
      </div>
    </div>
  )
}
