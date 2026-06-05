import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Play, CheckCircle, TrendingUp, Globe, Shield, Quote } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const videoTestimonials = [
  {
    id: "996806875",
    title: "Fake Exchange Scam - $89K Recovered",
    client: "Robert Chen",
    location: "Singapore 🇸🇬",
    amount: "$89,000",
    type: "Fake Exchange",
  },
  {
    id: "996806916",
    title: "Ponzi Scheme - $203K Recovered",
    client: "Emma Thompson",
    location: "Australia 🇦🇺",
    amount: "$203,000",
    type: "Ponzi Scheme",
  },
  {
    id: "996805094",
    title: "Exit Scam - ¥12.5M Protected",
    client: "Hiroshi Tanaka",
    location: "Japan 🇯🇵",
    amount: "¥12,500,000",
    type: "Exit Scam",
  },
  {
    id: "996806970",
    title: "Romance Scam - £45K Recovered",
    client: "Sarah Williams",
    location: "United Kingdom 🇬🇧",
    amount: "£45,000",
    type: "Romance Scam",
  },
  {
    id: "996807137",
    title: "Investment Fraud - $127K Recovered",
    client: "Michael Garcia",
    location: "United States 🇺🇸",
    amount: "$127,000",
    type: "Investment Fraud",
  },
  {
    id: "996807051",
    title: "Phishing Attack - €68K Recovered",
    client: "Sophie Laurent",
    location: "France 🇫🇷",
    amount: "€68,000",
    type: "Phishing",
  },
];

const writtenReviews = [
  {
    name: "David Martinez",
    company: "Tech Startup CEO",
    location: "Austin, TX",
    rating: 5,
    date: "December 2024",
    caseType: "DeFi Protocol Exploit",
    recovered: "$340,000",
    testimonial: "After losing our entire treasury to a DeFi exploit, I thought recovery was impossible. CipherTrace traced the funds through 15 different wallets and 4 exchanges. Within 8 weeks, we had 94% of our funds back. Their blockchain forensics team is world-class.",
  },
  {
    name: "Priya Sharma",
    company: "Investment Banker",
    location: "Mumbai, India",
    rating: 5,
    date: "November 2024",
    caseType: "Pig Butchering Scam",
    recovered: "₹8,200,000",
    testimonial: "I was introduced to what seemed like a legitimate crypto investment platform through LinkedIn. Lost ₹8.2M over 3 months. CipherTrace's team worked with Indian authorities and recovered 87% within 12 weeks. They saved my family's financial future.",
  },
  {
    name: "Carlos Rodriguez",
    company: "Small Business Owner",
    location: "Madrid, Spain",
    rating: 5,
    date: "October 2024",
    caseType: "Ransomware Payment",
    recovered: "€92,000",
    testimonial: "Our business was hit with ransomware. We paid the €92K ransom but got nothing. CipherTrace traced the Bitcoin payment to a known criminal group and worked with Europol. Recovered 100% of funds plus damages. Exceptional work.",
  },
  {
    name: "Jennifer Park",
    company: "Real Estate Investor",
    location: "Vancouver, Canada",
    rating: 5,
    date: "September 2024",
    caseType: "NFT Marketplace Fraud",
    recovered: "CAD $156,000",
    testimonial: "Lost CAD $156K to a fake NFT marketplace that looked completely legitimate. CipherTrace identified the operators through blockchain analysis and wallet fingerprinting. Funds recovered in 6 weeks. Their technical expertise is unmatched.",
  },
  {
    name: "Ahmed Hassan",
    company: "Cryptocurrency Trader",
    location: "Dubai, UAE",
    rating: 5,
    date: "August 2024",
    caseType: "Fake Trading Bot",
    recovered: "AED 780,000",
    testimonial: "Fell victim to an automated trading bot scam that promised guaranteed returns. Lost AED 780K in 2 weeks. CipherTrace's investigation revealed a sophisticated operation across 6 countries. Recovered 91% through international legal action.",
  },
  {
    name: "Lisa Anderson",
    company: "Retired Teacher",
    location: "Melbourne, Australia",
    rating: 5,
    date: "July 2024",
    caseType: "Investment Scam",
    recovered: "AUD $112,000",
    testimonial: "Lost my retirement savings to a Bitcoin investment scam advertised on Facebook. CipherTrace treated my case with urgency and compassion. Within 10 weeks, they recovered AUD $112K. I'm forever grateful to their team.",
  },
  {
    name: "Yuki Nakamura",
    company: "Software Engineer",
    location: "Tokyo, Japan",
    rating: 5,
    date: "June 2024",
    caseType: "Wallet Drainer",
    recovered: "¥9,400,000",
    testimonial: "Connected my MetaMask to a malicious dApp that drained my entire wallet - ¥9.4M worth of crypto. CipherTrace's rapid response team tracked the funds in real-time and froze them on 3 exchanges. 98% recovery rate. Incredible service.",
  },
  {
    name: "Marco Silva",
    company: "E-commerce Business",
    location: "São Paulo, Brazil",
    rating: 5,
    date: "May 2024",
    caseType: "Payment Processor Fraud",
    recovered: "R$ 520,000",
    testimonial: "Our business payment processor was compromised and R$ 520K in crypto payments were stolen. CipherTrace's forensics team traced the funds through privacy mixers and tumblers. Recovered 85% working with Brazilian federal police.",
  },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredReviews = filter === "all" 
    ? writtenReviews 
    : writtenReviews.filter(r => r.caseType.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Head>
        <title>Client Testimonials | CipherTrace Recovery - Real Success Stories</title>
        <meta name="description" content="Watch video testimonials and read reviews from 2,400+ clients who successfully recovered stolen cryptocurrency. Average 4.9/5 stars across all platforms." />
        <meta property="og:title" content="2,400+ Client Success Stories | CipherTrace Recovery" />
        <meta property="og:description" content="Real testimonials from crypto fraud victims who recovered their funds through our blockchain forensics services." />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary opacity-90" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(218, 165, 32, 0.1) 0%, transparent 50%)`
            }} />
            
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="gold" className="mb-6 text-sm px-4 py-2">
                  <Star className="h-4 w-4 mr-2" />
                  2,400+ Verified Testimonials
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  Real Stories of<br />
                  <span className="text-accent">Successful Recovery</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Watch video testimonials and read detailed reviews from clients across 78 countries who recovered their stolen cryptocurrency.
                </p>

                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-accent">4.9</span>
                      <Star className="h-6 w-6 fill-accent text-accent" />
                    </div>
                    <div className="text-sm text-primary-foreground/80">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">2,400+</div>
                    <div className="text-sm text-primary-foreground/80">Total Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">78</div>
                    <div className="text-sm text-primary-foreground/80">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </section>

          {/* Video Testimonials */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Play className="h-3 w-3 mr-1" />
                  Video Testimonials
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Hear From Our Clients
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Watch extended interviews where clients share their recovery journey and experience working with our team.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {videoTestimonials.slice(0, 3).map((video) => (
                  <Card key={video.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative w-full bg-slate-900" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          title={video.title}
                        />
                      </div>
                      <div className="p-6 bg-card">
                        <Badge variant="gold" className="mb-3 text-xs">
                          {video.type}
                        </Badge>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{video.client}</span>
                          <span className="font-semibold text-accent">{video.amount}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">{video.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {videoTestimonials.slice(3, 6).map((video) => (
                  <Card key={video.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative w-full bg-slate-900" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          title={video.title}
                        />
                      </div>
                      <div className="p-6 bg-card">
                        <Badge variant="gold" className="mb-3 text-xs">
                          {video.type}
                        </Badge>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{video.client}</span>
                          <span className="font-semibold text-accent">{video.amount}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">{video.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Written Reviews */}
          <section className="py-20 md:py-28 bg-muted">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Quote className="h-3 w-3 mr-1" />
                  Client Reviews
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Detailed testimonials from clients who successfully recovered their stolen cryptocurrency.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                  variant={filter === "all" ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All Reviews
                </Button>
                <Button
                  variant={filter === "scam" ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setFilter("scam")}
                >
                  Scams
                </Button>
                <Button
                  variant={filter === "investment" ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setFilter("investment")}
                >
                  Investment Fraud
                </Button>
                <Button
                  variant={filter === "defi" ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setFilter("defi")}
                >
                  DeFi Exploits
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredReviews.map((review, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                            {review.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{review.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            <Globe className="h-3 w-3 inline mr-1" />
                            {review.location} • {review.date}
                          </p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {review.caseType}
                        </Badge>
                        <Badge variant="gold" className="text-xs font-semibold">
                          {review.recovered} Recovered
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        "{review.testimonial}"
                      </p>

                      <div className="flex items-center gap-2 pt-4 border-t border-border">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-700">Verified Client</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Stats */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-12 text-white">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                    Trusted Globally
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Our clients' success speaks for itself
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-12">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
                    <div className="text-sm text-white/80">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">37K+</div>
                    <div className="text-sm text-white/80">Cases Completed</div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">78</div>
                    <div className="text-sm text-white/80">Countries Served</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button asChild size="lg" variant="gold" className="shadow-lg">
                    <Link href="/report-scam">Start Your Recovery</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}