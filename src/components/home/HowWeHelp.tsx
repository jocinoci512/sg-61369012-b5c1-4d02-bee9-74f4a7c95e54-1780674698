import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Lock, BookOpen, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function HowWeHelp() {
  const benefits = [
    {
      icon: Shield,
      title: "Asset Recovery",
      description: "Blockchain forensics to trace stolen funds and provide evidence for legal proceedings and law enforcement."
    },
    {
      icon: Users,
      title: "Platform Screening",
      description: "Verify exchanges and wallets use compliant, secure infrastructure before you transact."
    },
    {
      icon: Lock,
      title: "Privacy Protection",
      description: "Advanced tools that safeguard legitimate privacy while combating illicit activities."
    },
    {
      icon: BookOpen,
      title: "Fraud Education",
      description: "Comprehensive resources to identify and avoid cryptocurrency scams before they happen."
    }
  ];

  const steps = [
    { 
      number: "01", 
      title: "Report Immediately", 
      description: "File with IC3.gov (US), ActionFraud (UK), or your local authorities"
    },
    { 
      number: "02", 
      title: "Freeze Accounts", 
      description: "Contact your exchange or wallet provider to prevent further transactions"
    },
    { 
      number: "03", 
      title: "Document Evidence", 
      description: "Gather transaction IDs, wallet addresses, and all communication records"
    },
    { 
      number: "04", 
      title: "Get Expert Help", 
      description: "Contact our forensics team for advanced blockchain analysis"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Users className="h-3 w-3 mr-1" />
            Individual Support
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Protecting Individuals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a fraud victim or protecting your investments — we provide the expertise to secure your digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-10 md:p-12 border border-border shadow-xl mb-12">
          <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-8 text-center">
            If You've Been Scammed
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="font-mono text-5xl font-bold text-accent opacity-50">
                    {step.number}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary-foreground">
                    {step.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted rounded-2xl p-10 border border-border">
          <PhoneCall className="h-12 w-12 text-accent mx-auto mb-6" />
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
            24/7 Emergency Support
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Every minute matters in fraud recovery. Our global team is standing by to trace your stolen funds and coordinate with law enforcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/report-scam">
                Report Scam Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}