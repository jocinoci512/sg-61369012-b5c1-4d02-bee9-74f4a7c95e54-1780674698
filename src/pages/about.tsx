import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Target, CheckCircle, TrendingUp, Lock, Globe, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Marcus Chen",
      role: "Chief Forensics Officer",
      credentials: "PhD Cryptography • Former FBI Cyber Division • CISSP, CFCE",
      expertise: "Blockchain forensics, criminal investigations, cryptographic analysis"
    },
    {
      name: "Sarah Williams",
      role: "Director of Recovery Operations",
      credentials: "15 years Digital Forensics • Interpol Certified • CCFE, EnCE",
      expertise: "Asset tracing, multi-jurisdictional coordination, exchange relations"
    },
    {
      name: "Kenji Nakamura",
      role: "Lead Smart Contract Analyst",
      credentials: "Solidity Expert • DeFi Security Auditor • OSCP",
      expertise: "Smart contract forensics, DeFi exploits, vulnerability analysis"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Legal Compliance",
      credentials: "JD Cyber Law • AML Specialist • 12+ years Fintech",
      expertise: "International crypto law, regulatory compliance, asset seizure"
    }
  ];

  const certifications = [
    { name: "FBI Digital Forensics Certified", icon: Shield },
    { name: "ISO 27001 Security Certified", icon: Lock },
    { name: "Interpol Blockchain Investigator", icon: Globe },
    { name: "CFCE & CCFE Accredited", icon: Award },
    { name: "Licensed PI (48 Jurisdictions)", icon: Briefcase },
    { name: "SOC 2 Type II Compliant", icon: CheckCircle }
  ];

  const methodology = [
    {
      phase: "Initial Assessment",
      icon: BookOpen,
      description: "Free 30-minute consultation analyzing your case details, evidence quality, and recovery likelihood. Honest assessment with no obligation."
    },
    {
      phase: "Evidence Collection",
      icon: Target,
      description: "Secure gathering of wallet addresses, transaction hashes, communications, screenshots, and all available documentation through encrypted channels."
    },
    {
      phase: "Blockchain Forensics",
      icon: TrendingUp,
      description: "Advanced on-chain analysis tracing asset flow across exchanges, mixers, and wallets. Pattern recognition identifies perpetrators and fund destinations."
    },
    {
      phase: "Legal Coordination",
      icon: Shield,
      description: "Collaboration with law enforcement, exchanges, and legal teams. Asset freezing requests, court orders, and international cooperation protocols."
    },
    {
      phase: "Fund Recovery",
      icon: CheckCircle,
      description: "Secure transfer of recovered assets to your verified wallet. Complete documentation for tax and legal purposes. Post-recovery support included."
    }
  ];

  const milestones = [
    { year: "2018", event: "CipherTrace Recovery founded by former FBI cyber investigators" },
    { year: "2019", event: "First $10M recovery milestone • Expanded to 12 countries" },
    { year: "2020", event: "ISO 27001 certification • Partnership with Interpol" },
    { year: "2021", event: "Recovered $100M+ • 10,000th case successfully resolved" },
    { year: "2022", event: "DeFi forensics division launched • $250M total recovered" },
    { year: "2023", event: "AI-powered tracing tools deployed • 25,000th successful case" },
    { year: "2024", event: "$500M recovery milestone • Operations in 78 countries" },
    { year: "2025", event: "37,000+ cases resolved • $754M+ total recovered" }
  ];

  return (
    <>
      <Head>
        <title>About Us | CipherTrace Recovery - Expert Blockchain Forensics Team</title>
        <meta name="description" content="Meet the expert team behind CipherTrace Recovery. Former FBI investigators, certified blockchain forensics analysts, and legal professionals with 99.8% success rate." />
        <link rel="canonical" href="https://recovery-ciphertrace.com/about" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-[hsl(220,90%,20%)]">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative container py-20 md:py-28">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <Badge variant="gold" className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Trusted Since 2019
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Leading Blockchain Forensics Experts
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  We combine cutting-edge technology with financial investigation expertise to recover stolen cryptocurrency and bring justice to victims of fraud.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </section>

          {/* Mission & Values */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    To restore financial justice for cryptocurrency fraud victims through world-class blockchain forensics, unwavering ethical standards, and relentless pursuit of asset recovery.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">Integrity First</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every investigation conducted with forensic rigor, legal compliance, and complete transparency.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">Client-Centered</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        24/7 support, regular updates, and genuine care for victims navigating traumatic fraud experiences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">Results Driven</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        99.8% success rate maintained through cutting-edge technology and deep industry expertise.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20 md:py-28 bg-muted">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Users className="h-3 w-3 mr-1" />
                  Leadership Team
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  World-Class Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our leadership combines government cyber investigation experience, blockchain forensics certifications, and deep technical expertise in cryptocurrency systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {team.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Users className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                          <Badge variant="gold" className="mb-3">{member.role}</Badge>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {member.credentials}
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            <strong>Expertise:</strong> {member.expertise}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Certifications & Accreditations
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Industry-leading security certifications and law enforcement partnerships ensuring compliance, credibility, and operational excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-8 pb-6">
                        <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="py-20 md:py-28 bg-muted">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Target className="h-3 w-3 mr-1" />
                  Our Approach
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Recovery Methodology
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A proven five-phase process combining technical forensics, legal coordination, and strategic recovery execution.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {methodology.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 flex items-start gap-6">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                          <Icon className="h-7 w-7 text-white group-hover:text-accent-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="text-xs font-mono">Phase {index + 1}</Badge>
                            <h3 className="font-serif text-2xl font-bold text-foreground">{step.phase}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Company Timeline */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Journey
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  From FBI-founded startup to global leader in blockchain forensics and cryptocurrency recovery.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 font-bold text-accent-foreground">
                          {milestone.year}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-0.5 flex-1 bg-border mt-4" />
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <Card className="group-hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <p className="text-foreground leading-relaxed">{milestone.event}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28 bg-primary">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Work With the Best in Crypto Recovery
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Join 37,000+ clients who trusted our FBI-founded team to recover their stolen cryptocurrency through rigorous blockchain forensics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="gold">
                    <Link href="/report-scam">
                      Start Your Case
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">Meet the Team</Link>
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