import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, AlertTriangle, Eye, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      icon: Shield,
      title: "AML Compliance",
      description: "Real-time monitoring and regulatory reporting for financial institutions.",
      badge: "Enterprise"
    },
    {
      icon: Search,
      title: "Blockchain Forensics",
      description: "Advanced transaction analysis and fund flow tracking across all chains.",
      badge: "Investigation"
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Comprehensive threat detection and risk scoring for crypto security.",
      badge: "Prevention"
    },
    {
      icon: Eye,
      title: "De-Anonymization",
      description: "Entity identification and address attribution for law enforcement.",
      badge: "Advanced"
    },
    {
      icon: Zap,
      title: "Ransomware Tracking",
      description: "Specialized detection and attribution for ransomware payments.",
      badge: "Specialty"
    },
    {
      icon: Users,
      title: "Scam Recovery",
      description: "Dedicated services for individuals affected by crypto fraud.",
      badge: "Individual"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="navy" className="mb-4">
            <Shield className="h-3 w-3 mr-1" />
            Full Spectrum
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From enterprise compliance to individual recovery — complete blockchain intelligence across 900+ cryptocurrencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold">
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted rounded-2xl p-10 border border-border">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
            Need Enterprise Solutions?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss AML compliance, forensics platforms, or custom intelligence feeds for your organization.
          </p>
          <Button asChild size="lg" variant="gold">
            <Link href="/services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}