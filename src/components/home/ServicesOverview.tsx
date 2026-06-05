import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, AlertTriangle, Eye, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border border-border/50 hover:border-accent/30">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-muted rounded-2xl p-10 border border-border hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
            Need Enterprise Solutions?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss AML compliance, forensics platforms, or custom intelligence feeds for your organization.
          </p>
          <Button asChild size="lg" variant="gold" className="hover:scale-105 transition-transform">
            <Link href="/services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}