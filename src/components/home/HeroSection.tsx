import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Shield, TrendingUp, Clock, Award, ArrowRight } from "lucide-react";

export function HeroSection() {
  const keyMetrics = [
    { value: "$754M+", label: "Recovered", sublabel: "2024 YTD" },
    { value: "37,000+", label: "Victims Helped", sublabel: "Since 2019" },
    { value: "99.8%", label: "Success Rate", sublabel: "Verified Cases" },
  ];

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative container py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <Badge variant="gold" className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Financial-Grade Blockchain Forensics
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Recover Your Stolen Crypto Assets
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Professional blockchain investigation and fund recovery services. We trace stolen cryptocurrency across global networks and recover what's rightfully yours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold" className="text-lg h-14 px-8 shadow-xl">
                <Link href="/report-scam">
                  Start Recovery Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/70 text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/70 text-sm">Licensed Experts</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-2xl border border-border shadow-2xl p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Live Performance</h3>
                  <p className="text-sm text-muted-foreground">Updated in real-time</p>
                </div>
              </div>

              <div className="space-y-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-end justify-between">
                      <span className="font-mono text-4xl font-bold text-primary">{metric.value}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{metric.sublabel}</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground/70">{metric.label}</p>
                    {index < keyMetrics.length - 1 && (
                      <div className="h-px bg-border mt-4" />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-center text-muted-foreground">
                  All metrics independently verified • Updated quarterly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}