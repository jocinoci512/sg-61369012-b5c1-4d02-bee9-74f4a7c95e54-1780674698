import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import TrustSignals from "@/components/home/TrustSignals";
import ServicesOverview from "@/components/home/ServicesOverview";
import HowWeHelp from "@/components/home/HowWeHelp";
import { FAQSection } from "@/components/home/FAQSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredVideos = [
    {
      id: "996807223",
      title: "Romance Scam - $127K Recovered",
      location: "United States 🇺🇸"
    },
    {
      id: "996807160",
      title: "Investment Fraud - €89K Recovered",
      location: "Germany 🇩🇪"
    },
    {
      id: "996807100",
      title: "Mining Scam - £54K Recovered",
      location: "United Kingdom 🇬🇧"
    }
  ];

  return (
    <>
      <Head>
        <title>CipherTrace Recovery | Professional Crypto Fraud Investigation & Asset Recovery</title>
        <meta name="description" content="Financial-grade blockchain forensics and cryptocurrency recovery services. $754M+ recovered for 37,000+ victims. Licensed investigators with 99.8% success rate." />
        <meta name="keywords" content="crypto recovery, blockchain forensics, cryptocurrency fraud investigation, stolen crypto, fund recovery, scam recovery, digital asset tracing" />
        <meta property="og:title" content="CipherTrace Recovery | Recover Your Stolen Crypto Assets" />
        <meta property="og:description" content="Professional blockchain investigation and fund recovery. Trace stolen cryptocurrency across global networks with financial-grade forensics." />
        <meta property="og:url" content="https://recovery-ciphertrace.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://recovery-ciphertrace.com" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Trust Signals */}
          <TrustSignals />

          {/* Video Testimonials Section */}
          <section className="py-20 md:py-28 bg-card">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Play className="h-3 w-3 mr-1" />
                  Verified Testimonials
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Real Recovery Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Watch actual clients share their journey from fraud victim to successful fund recovery with our blockchain forensics team.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {featuredVideos.map((video) => (
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
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{video.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{video.location}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Videos Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative w-full bg-slate-900" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://player.vimeo.com/video/996806916?badge=0&autopause=0&player_id=0&app_id=58479"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="Ponzi Scheme Recovery"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Ponzi Scheme - $203K Recovered</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Australia 🇦🇺</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative w-full bg-slate-900" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://player.vimeo.com/video/996805094?badge=0&autopause=0&player_id=0&app_id=58479"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="Exit Scam Prevention"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Exit Scam - ¥12.5M Protected</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Japan 🇯🇵</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA to Reviews Page */}
              <div className="text-center bg-muted rounded-2xl p-10 border border-border">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-semibold text-muted-foreground">All testimonials verified • 2,400+ successful cases</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Explore More Success Stories
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Watch extended video interviews and read detailed testimonials from clients across 78 countries who recovered their stolen cryptocurrency.
                </p>
                <Button asChild size="lg" variant="gold">
                  <Link href="/reviews">View All Testimonials</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* How We Help */}
          <HowWeHelp />

          {/* Services Overview */}
          <ServicesOverview />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Blog Preview / Resources */}
          <BlogPreview />

          {/* FAQ Section */}
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
