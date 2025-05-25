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
        {/* Article Header */}
        <section className="bg-secondary/30 py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-4 flex items-center text-sm text-muted-foreground">
              <Link href="/education" className="hover:text-primary">Education</Link>
              <span className="mx-2">/</span>
              <Link href="/education/credit-cards" className="hover:text-primary">Credit Cards</Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How to Choose the Right Credit Card in Jordan</h1>
            
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <span className="flex items-center mr-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min read</span>
              </span>
              <span>Published: April 20, 2025</span>
              <span className="mx-2">•</span>
              <span>Updated: April 25, 2025</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                <span>Share</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Bookmark className="h-4 w-4 mr-2" />
                <span>Save</span>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="md:col-span-8">
                <div className="prose max-w-none">
                  <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
                  
                  <p className="text-lg font-medium mb-6">
                    With dozens of credit card options available from Jordanian banks, choosing the right one can be overwhelming. This guide will help you understand the different types of credit cards, their features, and how to select the best one for your lifestyle and spending habits.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Credit Card Types</h2>
                  
                  <p>
                    Credit cards in Jordan come in various types, each designed for different needs and spending patterns. The main categories include:
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Cashback Cards</h3>
                  
                  <p>
                    Cashback cards return a percentage of your spending as cash rewards. These are ideal if you want straightforward rewards without having to navigate complex point systems.
                  </p>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Pros:</strong> Simple to understand, direct cash rewards, often no minimum redemption threshold</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Cons:</strong> Cashback rates in Jordan are typically lower than international markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Best for:</strong> Everyday spenders who want simple rewards</span>
                    </li>
                  </ul>
                  
                  <p>
                    In Jordan, cashback rates typically range from 0.5% to 5%, with higher rates often applying to specific spending categories like groceries, fuel, or dining.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Travel Rewards Cards</h3>
                  
                  <p>
                    Travel cards earn points or miles that can be redeemed for flights, hotel stays, or other travel expenses. Some cards are co-branded with airlines like Royal Jordanian.
                  </p>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Pros:</strong> Higher value when redeemed for travel, additional travel perks like lounge access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Cons:</strong> Less flexible rewards, may have higher annual fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Best for:</strong> Frequent travelers, especially those who fly regularly</span>
                    </li>
                  </ul>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg my-6">
                    <h4 className="font-semibold mb-2">Expert Tip</h4>
                    <p className="text-sm">
                      If you travel internationally at least twice a year, a travel rewards card with no foreign transaction fees could save you significantly more than a cashback card, even with a higher annual fee.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Low Interest Cards</h3>
                  
                  <p>
                    These cards offer lower interest rates than standard credit cards, making them suitable if you occasionally carry a balance.
                  </p>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Pros:</strong> Lower monthly interest charges, sometimes offer 0% introductory periods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Cons:</strong> Usually fewer rewards and benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Best for:</strong> Those who might carry a balance occasionally</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Key Factors to Consider</h2>
                  
                  <p>
                    When comparing credit cards in Jordan, consider these important factors:
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Annual Fees</h3>
                  
                  <p>
                    Annual fees in Jordan typically range from 0 to 200 JOD, with premium cards charging higher fees. A card with an annual fee can still be worthwhile if the benefits exceed the cost.
                  </p>
                  
                  <p>
                    For example, if a card has a 75 JOD annual fee but offers benefits worth 150 JOD (through cashback, travel insurance, lounge access, etc.), it's still a good value.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Interest Rates</h3>
                  
                  <p>
                    In Jordan, credit card interest rates are typically expressed as a monthly rate, ranging from 1.5% to 2.5% (approximately 18% to 30% annually). If you plan to carry a balance, prioritize cards with lower rates.
                  </p>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg my-6">
                    <h4 className="font-semibold mb-2">Interest Rate Calculation Example</h4>
                    <p className="text-sm">
                      If you carry a 1,000 JOD balance on a card with a 2% monthly interest rate, you'll pay 20 JOD in interest each month. Over a year, that's 240 JOD in interest charges.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Rewards and Benefits</h3>
                  
                  <p>
                    Consider how rewards align with your spending habits. Common benefits in Jordanian credit cards include:
                  </p>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cashback on specific categories (groceries, fuel, dining)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Travel insurance and airport lounge access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Purchase protection and extended warranties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Installment plans with reduced or zero interest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Discounts at partner merchants</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">How to Apply for a Credit Card in Jordan</h2>
                  
                  <p>
                    The application process typically requires:
                  </p>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Valid ID (national ID for Jordanians, passport for non-Jordanians)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Proof of income (salary certificate or bank statements)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Proof of residence (utility bill or rental agreement)</span>
                    </li>
                  </ul>
                  
                  <p>
                    Most banks in Jordan require a minimum monthly income of 300-500 JOD for basic cards and 1,000+ JOD for premium cards.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Our Top Picks for 2025</h2>
                  
                  <p>
                    Based on our analysis, here are some of the best credit cards currently available in Jordan:
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Best for Cashback: Arab Bank Visa Platinum</h3>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>6% cashback on travel purchases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>3% on dining, 1% on everything else</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Annual fee: 75 JOD (waived first year)</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Best for Travel: Bank of Jordan World MasterCard</h3>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>2x miles on all purchases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Free airport lounge access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Annual fee: 100 JOD</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Best for Everyday Use: Housing Bank Visa Signature</h3>
                  
                  <ul className="space-y-2 my-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>5% cashback on groceries, 3% on fuel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>0% interest on installments up to 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Annual fee: 60 JOD</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                  
                  <p>
                    The right credit card can provide significant benefits and savings, but it's important to choose one that aligns with your spending habits and lifestyle. Consider your priorities—whether that's maximizing rewards, minimizing costs, or accessing specific benefits—and compare options carefully.
                  </p>
                  
                  <p>
                    Remember that responsible credit card use is essential. Pay your balance in full each month when possible to avoid interest charges, and always make at least the minimum payment on time to maintain a good credit history.
                  </p>
                  
                  <div className="flex items-center justify-between mt-8 pt-6 border-t">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Save</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-4">
                <div className="space-y-6">
                  {/* Author Card */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">About the Author</h3>
                    <div className="flex items-center mb-3">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Sarah Al-Nasser</p>
                        <p className="text-sm text-muted-foreground">Financial Writer</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Sarah has been covering personal finance in Jordan for over 5 years, with expertise in credit cards and banking products.
                    </p>
                  </Card>
                  
                  {/* Related Articles */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      <div>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                          Understanding Credit Card Fees in Jordan
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">April 15, 2025</p>
                      </div>
                      <div>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                          How to Improve Your Credit Score in Jordan
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">April 10, 2025</p>
                      </div>
                      <div>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                          Credit Card vs. Debit Card: Which is Better?
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">April 5, 2025</p>
                      </div>
                      <div>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                          The Hidden Benefits of Premium Credit Cards
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">March 28, 2025</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Popular Tools */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">Popular Tools</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <CalculatorIcon className="h-4 w-4 mr-2" />
                        <span>Credit Card Calculator</span>
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <CalculatorIcon className="h-4 w-4 mr-2" />
                        <span>Debt Payoff Calculator</span>
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <CalculatorIcon className="h-4 w-4 mr-2" />
                        <span>Budget Calculator</span>
                      </Button>
                    </div>
                  </Card>
                  
                  {/* Newsletter Signup */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest financial tips and news delivered to your inbox.
                    </p>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-2 text-sm border rounded-md"
                      />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Articles Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">More Articles You Might Like</h2>
              <Link href="/education" className="text-primary hover:text-primary/80 flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span>Credit Cards</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    <Link href="#" className="hover:text-primary">
                      5 Ways to Maximize Your Credit Card Rewards
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn strategies to earn more points and cashback from your everyday spending.
                  </p>
                  <div className="flex items-center text-xs">
                    <div className="h-6 w-6 rounded-full bg-gray-200 mr-2"></div>
                    <span>By Mohammed Khalid</span>
                    <span className="mx-2">•</span>
                    <span>April 18, 2025</span>
                  </div>
                </div>
              </Card>
              
              {/* Article 2 */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span>Personal Loans</span>
                    <span className="mx-2">•</span>
                    <span>7 min read</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    <Link href="#" className="hover:text-primary">
                      How to Get the Best Personal Loan Rate in Jordan
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tips and strategies to secure the lowest interest rate on your next personal loan.
                  </p>
                  <div className="flex items-center text-xs">
                    <div className="h-6 w-6 rounded-full bg-gray-200 mr-2"></div>
                    <span>By Layla Amman</span>
                    <span className="mx-2">•</span>
                    <span>April 16, 2025</span>
                  </div>
                </div>
              </Card>
              
              {/* Article 3 */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span>Savings</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    <Link href="#" className="hover:text-primary">
                      The Ultimate Guide to Saving Money in Jordan
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practical tips to build your savings even during challenging economic times.
                  </p>
                  <div className="flex items-center text-xs">
                    <div className="h-6 w-6 rounded-full bg-gray-200 mr-2"></div>
                    <span>By Rania Haddad</span>
                    <span className="mx-2">•</span>
                    <span>April 12, 2025</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
