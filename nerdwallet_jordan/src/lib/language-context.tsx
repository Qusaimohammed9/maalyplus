import { createContext, useContext, useState, useEffect } from 'react'

// Define language context type
type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  t: (key: string) => key,
})

// Translation data
const translations = {
  ar: {
    // Navigation
    'nav.creditCards': 'بطاقات الائتمان',
    'nav.loans': 'القروض',
    'nav.mortgages': 'التمويل العقاري',
    'nav.banking': 'الخدمات المصرفية',
    'nav.investing': 'الاستثمار',
    'nav.tools': 'الأدوات',
    'nav.search': 'بحث',
    'nav.myAccount': 'حسابي',
    
    // Homepage
    'home.hero.title.egypt': 'اتخذ قرارات مالية أفضل في مصر',
    'home.hero.title.jordan': 'اتخذ قرارات مالية أفضل في الأردن',
    'home.hero.title.saudi': 'اتخذ قرارات مالية أفضل في السعودية',
    'home.hero.subtitle': 'قارن بين أفضل المنتجات المالية من البنوك واحصل على نصائح مالية مخصصة',
    'home.hero.cta': 'ابدأ المقارنة الآن',
    
    // Sections
    'section.creditCards': 'بطاقات الائتمان',
    'section.loans': 'القروض الشخصية',
    'section.mortgages': 'قروض الإسكان',
    'section.savings': 'حسابات التوفير',
    'section.tools': 'الأدوات المالية',
    'section.education': 'التثقيف المالي',
    'section.viewAll': 'عرض الكل',
    
    // Card features
    'card.annualFee': 'الرسوم السنوية',
    'card.cashback': 'استرداد نقدي',
    'card.apply': 'تقدم بطلب',
    'card.features': 'مميزات البطاقة',
    
    // Tools
    'tool.loanCalculator': 'حاسبة القروض',
    'tool.loanCalculator.desc': 'احسب قسطك الشهري وإجمالي الفوائد',
    'tool.mortgageCalculator': 'حاسبة الرهن العقاري',
    'tool.mortgageCalculator.desc': 'احسب تكلفة قرض المنزل وخطة السداد',
    'tool.savingsCalculator': 'حاسبة التوفير',
    'tool.savingsCalculator.desc': 'احسب نمو مدخراتك مع مرور الوقت',
    'tool.currencyConverter': 'محول العملات',
    'tool.currencyConverter.desc': 'تحويل سريع بين العملات المختلفة',
    'tool.useNow': 'استخدم الآن',
    
    // Articles
    'article.financialTips': 'نصائح مالية',
    'article.investing': 'استثمار',
    'article.saving': 'توفير',
    'article.readMore': 'اقرأ المزيد',
    
    // Banks comparison
    'banks.compare': 'قارن بين البنوك',
    'banks.bank': 'البنك',
    'banks.interestRate': 'معدل الفائدة',
    'banks.maxLoan': 'الحد الأقصى للقرض',
    'banks.maxTerm': 'المدة القصوى',
    'banks.minIncome': 'الحد الأدنى للدخل',
    'banks.details': 'تفاصيل',
    
    // Newsletter
    'newsletter.title': 'اشترك في نشرتنا الإخبارية',
    'newsletter.subtitle': 'احصل على أحدث النصائح المالية والعروض والمقارنات مباشرة إلى بريدك الإلكتروني',
    'newsletter.email': 'البريد الإلكتروني',
    'newsletter.subscribe': 'اشترك',
    
    // Footer
    'footer.about': 'مالي بلس',
    'footer.aboutDesc': 'منصة مقارنة مالية رائدة في العالم العربي، تساعدك على اتخاذ قرارات مالية أفضل من خلال مقارنة المنتجات المالية وتقديم المشورة المالية.',
    'footer.products': 'المنتجات المالية',
    'footer.tools': 'الأدوات',
    'footer.company': 'الشركة',
    'footer.about.link': 'من نحن',
    'footer.contact': 'اتصل بنا',
    'footer.careers': 'وظائف',
    'footer.press': 'الأخبار الصحفية',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.copyright': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.creditCards': 'Credit Cards',
    'nav.loans': 'Loans',
    'nav.mortgages': 'Mortgages',
    'nav.banking': 'Banking',
    'nav.investing': 'Investing',
    'nav.tools': 'Tools',
    'nav.search': 'Search',
    'nav.myAccount': 'My Account',
    
    // Homepage
    'home.hero.title.egypt': 'Make Better Financial Decisions in Egypt',
    'home.hero.title.jordan': 'Make Better Financial Decisions in Jordan',
    'home.hero.title.saudi': 'Make Better Financial Decisions in Saudi Arabia',
    'home.hero.subtitle': 'Compare the best financial products from banks and get personalized financial advice',
    'home.hero.cta': 'Start Comparing Now',
    
    // Sections
    'section.creditCards': 'Credit Cards',
    'section.loans': 'Personal Loans',
    'section.mortgages': 'Mortgages',
    'section.savings': 'Savings Accounts',
    'section.tools': 'Financial Tools',
    'section.education': 'Financial Education',
    'section.viewAll': 'View All',
    
    // Card features
    'card.annualFee': 'Annual Fee',
    'card.cashback': 'Cashback',
    'card.apply': 'Apply Now',
    'card.features': 'Card Features',
    
    // Tools
    'tool.loanCalculator': 'Loan Calculator',
    'tool.loanCalculator.desc': 'Calculate your monthly payment and total interest',
    'tool.mortgageCalculator': 'Mortgage Calculator',
    'tool.mortgageCalculator.desc': 'Calculate your home loan cost and payment plan',
    'tool.savingsCalculator': 'Savings Calculator',
    'tool.savingsCalculator.desc': 'Calculate your savings growth over time',
    'tool.currencyConverter': 'Currency Converter',
    'tool.currencyConverter.desc': 'Quick conversion between different currencies',
    'tool.useNow': 'Use Now',
    
    // Articles
    'article.financialTips': 'Financial Tips',
    'article.investing': 'Investing',
    'article.saving': 'Saving',
    'article.readMore': 'Read More',
    
    // Banks comparison
    'banks.compare': 'Compare Banks',
    'banks.bank': 'Bank',
    'banks.interestRate': 'Interest Rate',
    'banks.maxLoan': 'Maximum Loan',
    'banks.maxTerm': 'Maximum Term',
    'banks.minIncome': 'Minimum Income',
    'banks.details': 'Details',
    
    // Newsletter
    'newsletter.title': 'Subscribe to Our Newsletter',
    'newsletter.subtitle': 'Get the latest financial tips, offers, and comparisons directly to your email',
    'newsletter.email': 'Email',
    'newsletter.subscribe': 'Subscribe',
    
    // Footer
    'footer.about': 'MaalyPlus',
    'footer.aboutDesc': 'A leading financial comparison platform in the Arab world, helping you make better financial decisions by comparing financial products and providing financial advice.',
    'footer.products': 'Financial Products',
    'footer.tools': 'Tools',
    'footer.company': 'Company',
    'footer.about.link': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.careers': 'Careers',
    'footer.press': 'Press',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.copyright': 'All Rights Reserved',
  }
}

// Language provider component
export function LanguageProvider({ children }) {
  // Default to Arabic, but check localStorage on client
  const [language, setLanguageState] = useState('ar')
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])
  
  // Function to change language
  const setLanguage = (lang) => {
    setLanguageState(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }
  
  // Translation function
  const t = (key) => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to Arabic if translation not found
      return translations['ar'][key] || key
    }
    return translations[language][key]
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use language context
export function useLanguage() {
  return useContext(LanguageContext)
}
