import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Users, Award, CheckCircle, Clock, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const keyMetrics = [
  {
    icon: Shield,
    value: "$754M+",
    label: "Funds Recovered",
    sublabel: "2024 YTD"
  },
  {
    icon: Users,
    value: "37,000+",
    label: "Victims Helped",
    sublabel: "Since 2019"
  },
  {
    icon: Globe,
    value: "900+",
    label: "Cryptocurrencies",
    sublabel: "Tracked"
  },
  {
    icon: Award,
    value: "99.8%",
    label: "Success Rate",
    sublabel: "Verified Cases"
  }
];

const liveStats = [
  { label: "Cases Today", value: "47", icon: CheckCircle },
  { label: "Active Now", value: "3,847", icon: Clock },
  { label: "Countries", value: "85+", icon: Globe },
  { label: "Satisfaction", value: "98.7%", icon: Star }
];

const certifications = [
  { name: "SOC 2 Type II", icon: Shield, description: "Security compliance" },
  { name: "ISO 27001", icon: Award, description: "International standard" },
  { name: "Mastercard", icon: Zap, description: "Acquired 2021" }
];

export default function TrustSignals() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="navy" className="mb-4">
            <Globe className="h-3 w-3 mr-1 animate-pulse-slow" />
            Global Leader
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Financial institutions, law enforcement agencies, and victims across 85 countries rely on our blockchain forensics expertise.
          </p>
        </motion.div>

        {/* Live Status Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-6 mb-16 border border-border shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-accent rounded-full animate-pulse" />
              <span className="font-serif text-xl font-bold text-primary-foreground">Live Operations</span>
            </div>
            <Badge variant="gold" className="font-mono text-xs shadow-md shadow-accent/20">
              Updated Real-Time
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {liveStats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors"
              >
                <stat.icon className="h-5 w-5 text-accent mb-2" />
                <div className="font-mono text-2xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-primary-foreground/70 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                <CardContent className="p-8 text-center flex flex-col h-full justify-center">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <metric.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="font-mono text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="font-serif text-lg font-semibold text-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {metric.sublabel}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted rounded-2xl p-10 border border-border"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
              Financial-Grade Security
            </h3>
            <p className="text-muted-foreground">
              Trusted by institutions, verified by auditors, backed by Mastercard
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-serif text-lg font-bold text-foreground mb-2">
                  {cert.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {cert.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}