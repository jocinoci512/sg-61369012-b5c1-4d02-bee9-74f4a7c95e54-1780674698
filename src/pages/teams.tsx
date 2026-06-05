import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Globe, Users, Mail, Linkedin, CheckCircle, GraduationCap } from "lucide-react";
import Link from "next/link";

const leadership = [
  {
    name: "Dr. Michael Chen",
    role: "Chief Executive Officer",
    credentials: "PhD Cryptography, MIT • Former FBI Cyber Division",
    expertise: ["Blockchain Forensics", "International Law", "Corporate Security"],
    years: "18 years experience",
    description: "Led recovery operations exceeding $200M across 45 countries. Pioneered cross-border blockchain tracing methodologies.",
    email: "m.chen@ciphertrace.com",
    linkedin: "#",
  },
  {
    name: "Sarah Martinez",
    role: "Chief Technology Officer",
    credentials: "MS Computer Science, Stanford • CISSP, CEH",
    expertise: ["Smart Contract Analysis", "DeFi Security", "Cryptocurrency Tracing"],
    years: "15 years experience",
    description: "Developed proprietary blockchain analysis tools used in 12,000+ investigations. Expert witness in landmark crypto fraud cases.",
    email: "s.martinez@ciphertrace.com",
    linkedin: "#",
  },
  {
    name: "James Rodriguez",
    role: "Chief Legal Officer",
    credentials: "JD Harvard Law • Licensed in 8 jurisdictions",
    expertise: ["International Asset Recovery", "Regulatory Compliance", "Litigation"],
    years: "20 years experience",
    description: "Secured court orders for asset freezing in 34 countries. Former prosecutor specializing in financial crimes.",
    email: "j.rodriguez@ciphertrace.com",
    linkedin: "#",
  },
  {
    name: "Dr. Aisha Okonkwo",
    role: "Director of Forensics",
    credentials: "PhD Digital Forensics, Cambridge • CFE, CFCE",
    expertise: ["Evidence Collection", "Chain Custody", "Expert Testimony"],
    years: "12 years experience",
    description: "Testified as expert witness in 80+ cases with 100% admissibility. Specializes in complex DeFi protocol analysis.",
    email: "a.okonkwo@ciphertrace.com",
    linkedin: "#",
  },
];

const investigationTeam = [
  {
    name: "Alex Thompson",
    role: "Senior Blockchain Investigator",
    specialization: "Bitcoin & Layer 1 Protocols",
    certifications: ["CFE", "CAMS", "Chainalysis Certified"],
    caseload: "2,400+ cases",
  },
  {
    name: "Yuki Tanaka",
    role: "DeFi Security Specialist",
    specialization: "Smart Contracts & DEX Analysis",
    certifications: ["OSCP", "Certified Solidity Developer"],
    caseload: "1,800+ cases",
  },
  {
    name: "Marco Silva",
    role: "International Recovery Agent",
    specialization: "Cross-Border Asset Tracing",
    certifications: ["Licensed PI (EU)", "ACAMS Certified"],
    caseload: "1,200+ cases",
  },
  {
    name: "Priya Sharma",
    role: "Fraud Intelligence Analyst",
    specialization: "Scam Pattern Recognition",
    certifications: ["GCFA", "GIAC Certified"],
    caseload: "3,600+ cases",
  },
  {
    name: "David Kim",
    role: "Cryptocurrency Tracer",
    specialization: "Privacy Coins & Mixers",
    certifications: ["Elliptic Certified", "CipherTrace Certified"],
    caseload: "2,100+ cases",
  },
  {
    name: "Sophie Laurent",
    role: "Legal Liaison Specialist",
    specialization: "Court Orders & Compliance",
    certifications: ["Paralegal Certified", "AML Specialist"],
    caseload: "1,500+ cases",
  },
];

const supportTeam = [
  {
    role: "Client Support Specialists",
    count: 24,
    description: "24/7 multilingual support team available via phone, WhatsApp, email",
    languages: "18 languages supported",
  },
  {
    role: "Case Coordinators",
    count: 12,
    description: "Dedicated coordinators managing client communication and case progress",
    response: "< 2 hour response time",
  },
  {
    role: "Technical Analysts",
    count: 8,
    description: "Blockchain data analysts and forensic specialists supporting investigations",
    tools: "15+ proprietary analysis tools",
  },
];

export default function TeamsPage() {
  return (
    <>
      <Head>
        <title>Our Team | CipherTrace Recovery - Expert Blockchain Investigators</title>
        <meta name="description" content="Meet our team of licensed investigators, blockchain forensics experts, and legal professionals. 65+ years combined experience in cryptocurrency recovery." />
        <meta property="og:title" content="Expert Team | CipherTrace Recovery" />
        <meta property="og:description" content="World-class blockchain investigators and legal experts specializing in cryptocurrency fraud recovery." />
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
                  <Users className="h-4 w-4 mr-2" />
                  World-Class Expertise
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  Meet the Team Behind<br />
                  <span className="text-accent">$754M+ Recovered</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Licensed investigators, blockchain forensics experts, and legal professionals dedicated to recovering your stolen cryptocurrency.
                </p>

                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">65+</div>
                    <div className="text-sm text-primary-foreground/80">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">37K+</div>
                    <div className="text-sm text-primary-foreground/80">Cases Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">18</div>
                    <div className="text-sm text-primary-foreground/80">Languages Supported</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </section>

          {/* Leadership Team */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Shield className="h-3 w-3 mr-1" />
                  Leadership
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Executive Leadership
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Industry veterans with decades of experience in cybersecurity, law enforcement, and financial investigation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {leadership.map((member) => (
                  <Card key={member.name} className="hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        {/* Avatar Placeholder */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-navy-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                            {member.name}
                          </h3>
                          <p className="text-accent font-semibold mb-3">{member.role}</p>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-2">
                              <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">{member.credentials}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-foreground font-semibold">{member.years}</p>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {member.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3 pt-3 border-t border-border">
                            <a href={`mailto:${member.email}`} className="text-primary hover:text-primary/80 transition-colors">
                              <Mail className="h-5 w-5" />
                            </a>
                            <a href={member.linkedin} className="text-primary hover:text-primary/80 transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Investigation Team */}
          <section className="py-20 md:py-28 bg-muted">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Globe className="h-3 w-3 mr-1" />
                  Investigation Team
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Specialist Investigators
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Certified blockchain analysts, forensic specialists, and recovery agents working your case.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {investigationTeam.map((member) => (
                  <Card key={member.name} className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-gold-light flex items-center justify-center text-accent-foreground text-xl font-bold mb-4 shadow-md">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold mb-1">Specialization</p>
                          <p className="text-sm text-foreground">{member.specialization}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold mb-2">Certifications</p>
                          <div className="flex flex-wrap gap-1">
                            {member.certifications.map((cert) => (
                              <Badge key={cert} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-foreground">{member.caseload}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Support Team */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <Users className="h-3 w-3 mr-1" />
                  Support Team
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  24/7 Client Support
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Dedicated support specialists ensuring you're never alone in your recovery journey.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {supportTeam.map((team) => (
                  <Card key={team.role} className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <div className="text-3xl font-bold text-accent">{team.count}</div>
                      </div>
                      
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {team.role}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {team.description}
                      </p>

                      <Badge variant="gold" className="text-xs">
                        {team.languages || team.response || team.tools}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-12 text-white">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Start Your Recovery Today
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our expert team is ready to analyze your case and begin the recovery process within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="gold" className="shadow-lg">
                    <Link href="/report-scam">Report Your Case</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                    <Link href="/contact">Schedule Consultation</Link>
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