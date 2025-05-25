import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers/providers'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin', 'arabic'] })

export const metadata: Metadata = {
  title: 'مالي بلس | MaalyPlus - منصة المقارنة المالية الرائدة في العالم العربي',
  description: 'قارن بين أفضل المنتجات المالية من البنوك واحصل على نصائح مالية مخصصة. بطاقات ائتمان، قروض، تمويل عقاري، حسابات توفير، واستثمارات.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
