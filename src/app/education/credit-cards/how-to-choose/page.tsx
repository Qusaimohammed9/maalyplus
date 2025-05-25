'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { 
  BookOpen, 
  ArrowRight,
  Clock,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Calculator as CalculatorIcon
} from 'lucide-react'

export default function EducationalArticlePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* المحتوى التعليمي يظهر هنا دون تكرار */}
        {/* الكود الحالي لا يحتاج تعديل حاليًا لأن الصفحة منفصلة ولا تعتمد على بيانات مكررة من الدولة */}
      </main>
      <Footer />
    </div>
  )
}
