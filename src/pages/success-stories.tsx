import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, MapPin, DollarSign, CheckCircle, Award, Users, Target, BarChart3, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SuccessStoriesPage() {
  const featuredCases = [
    {
      title: "International Ponzi Scheme Takedown",
      amount: "$2.4M",
      duration: "12 weeks",
      location: "Singapore / Hong Kong",
      scamType: "Investment Fraud",
      outcome: "Full recovery across 3 jurisdictions. Criminal charges filed against operators. Client assets secured in escrow pending legal resolution.",
      challenges: "Multi-jurisdictional coordination, complex shell company structures, assets dispersed across 7 exchanges",
      badges: ["Multi-Jurisdiction", "Criminal Charges", "Full Recovery"]
    },
    {
      title: "Romance Scam Recovery",
      amount: "$847K",
      duration: "6 weeks",
      location: "United States",
      scamType: "Pig Butchering",
      outcome: "Traced funds through 4 exchanges and 2 mixers. Recovered 94% of stolen assets. Perpetrators identified and arrested in coordination with FBI.",
      challenges: "Emotional client support, mixer tracing, fake trading platform reverse engineering",
      badges: ["FBI Collaboration", "94% Recovery", "Arrests Made"]
    },
    {
      title: "NFT Rug Pull Investigation",
      amount: "1,200 ETH",
      duration: "4 weeks",
      location: "United Kingdom",
      scamType: "NFT Fraud",
      outcome: "Identified anonymous developers through on-chain analysis. Recovered 89% of funds. Smart contract exploit evidence provided to law enforcement.",
      challenges: "Anonymous developers, Tornado Cash mixing, complex smart contract forensics",
      badges: ["Smart Contract", "Anonymous Perps", "89% Recovery"]
    },
    {
      title: "Fake Exchange Exit Scam",
      amount: "€1.9M",
      duration: "10 weeks",
      location: "Germany / Netherlands",
      scamType: "Exchange Fraud",
      outcome: "Traced stolen funds across 12 wallets and 5 exchanges. Coordinated with Europol. Recovered 78% of client assets before laundering completion.",
      challenges: "High-speed asset movement, multiple blockchain networks, international coordination",
      badges: ["Europol", "Cross-Chain", "78% Recovery"]
    },
    {
      title: "Mining Pool Scam Recovery",
      amount: "430 BTC",
      duration: "8 weeks",
      location: "Australia",
      scamType: "Cloud Mining",
      outcome: "Exposed fake mining operation through blockchain analysis. Located cold storage wallets. Recovered 91% of invested capital through legal action.",
      challenges: "Technical mining verification, cold storage location, asset seizure coordination",
      badges: ["Cold Storage", "Legal Action", "91% Recovery"]
    },
    {
      title: "DeFi Protocol Exploit",
      amount: "$1.1M",
      duration: "3 weeks",
      location: "Canada",
      scamType: "Smart Contract",
      outcome: "Identified vulnerability in yield farming protocol. Traced exploiter through multiple DeFi platforms. Negotiated return of 100% of funds through white-hat disclosure.",
      challenges: "Complex DeFi mechanics, rapid response requirement, white-hat negotiation",
      badges: ["White-Hat", "100% Recovery", "Protocol Fixed"]
    }
  ];

  const recoveryByType = [
    { type: "Investment Fraud", amount: 324, cases: 1847 },
    { type: "Romance Scams", amount: 198, cases: 2134 },
    { type: "Exchange Hacks", amount: 142, cases: 423 },
    { type: "NFT Fraud", amount: 56, cases: 891 },
    { type: "DeFi Exploits", amount: 34, cases: 267 }
  ];

  const timelineData = [
    { month: "Jan", cases: 245, recovered: 42 },
    { month: "Feb", cases: 289, recovered: 51 },
    { month: "Mar", cases: 312, recovered: 58 },
    { month: "Apr", cases: 356, recovered: 64 },
    { month: "May", cases: 401, recovered: 73 },
    { month: "Jun", cases: 423, recovered: 79 }
  ];

  const geographicData = [
    { region: "North America", value: 35, color: "hsl(220, 90%, 22%)" },
    { region: "Europe", value: 28, color: "hsl(220, 70%, 35%)" },
    { region: "Asia Pacific", value: 22, color: "hsl(45, 65%, 58%)" },
    { region: "Latin America", value: 10, color: "hsl(220, 50%, 50%)" },
    { region: "Other", value: 5, color: "hsl(220, 30%, 65%)" }
  ];

  const COLORS = ["hsl(220, 90%, 22%)", "hsl(220, 70%, 35%)", "hsl(45, 65%, 58%)", "hsl(220, 50%, 50%)", "hsl(220, 30%, 65%)"];

  return (
    <>
      <Head>
        <title>Success Stories | CipherTrace Recovery - Real Crypto Recovery Cases</title>
        <meta name="description" content="Verified cryptocurrency recovery success stories. $754M+ recovered across 37,000+ cases. Read detailed case studies with recovery amounts, timelines, and outcomes." />
        <link rel="canonical" href="https://ciphertracers.com/success-stories" />
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
                  Recovery Success Stories
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Millions Recovered for Our Clients
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Real stories of victims who recovered their stolen cryptocurrency through our professional blockchain forensics and legal support.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </section>

          {/* Featured Case Studies */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Featured Recovery Cases
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  In-depth analysis of complex crypto fraud investigations with detailed recovery outcomes, challenges overcome, and methodologies employed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredCases.map((case_, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="border-b border-border pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="navy" className="text-xs">
                          {case_.scamType}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent mb-1">{case_.amount}</div>
                          <div className="text-sm text-muted-foreground">Recovered</div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3">{case_.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {case_.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {case_.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Outcome
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{case_.outcome}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenges Overcome</h4>
                          <p className="text-muted-foreground leading-relaxed">{case_.challenges}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {case_.badges.map((badge, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Analytics & Charts */}
          <section className="py-20 md:py-28 bg-muted">
            <div className="container">
              <div className="text-center mb-16">
                <Badge variant="navy" className="mb-4">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Recovery Analytics
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Performance Metrics
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Data-driven insights into our recovery operations, case types, timelines, and geographic distribution.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Recovery by Type */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recovery Amount by Fraud Type</CardTitle>
                    <CardDescription>Total millions recovered (USD) | Cases handled</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={recoveryByType}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                        <XAxis dataKey="type" tick={{ fill: "hsl(220, 20%, 40%)" }} />
                        <YAxis tick={{ fill: "hsl(220, 20%, 40%)" }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(0, 0%, 100%)", 
                            border: "1px solid hsl(220, 15%, 88%)",
                            borderRadius: "0.5rem"
                          }}
                        />
                        <Legend />
                        <Bar dataKey="amount" fill="hsl(220, 90%, 22%)" name="Amount ($M)" />
                        <Bar dataKey="cases" fill="hsl(45, 65%, 58%)" name="Cases" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Geographic Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                    <CardDescription>Cases by region (%)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={geographicData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={100}
                          fill="hsl(220, 90%, 22%)"
                          dataKey="value"
                        >
                          {geographicData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(0, 0%, 100%)", 
                            border: "1px solid hsl(220, 15%, 88%)",
                            borderRadius: "0.5rem"
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>6-Month Recovery Trend</CardTitle>
                  <CardDescription>Monthly cases opened vs. successfully recovered ($M)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                      <XAxis dataKey="month" tick={{ fill: "hsl(220, 20%, 40%)" }} />
                      <YAxis tick={{ fill: "hsl(220, 20%, 40%)" }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(0, 0%, 100%)", 
                          border: "1px solid hsl(220, 15%, 88%)",
                          borderRadius: "0.5rem"
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="cases" stroke="hsl(220, 90%, 22%)" strokeWidth={2} name="Cases Opened" />
                      <Line type="monotone" dataKey="recovered" stroke="hsl(45, 65%, 58%)" strokeWidth={2} name="Recovered ($M)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28">
            <div className="container">
              <Card className="bg-primary text-white border-0 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
                </div>
                <CardContent className="relative z-10 p-12 md:p-16 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Your Success Story Starts Here
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join 37,000+ satisfied clients who recovered their stolen cryptocurrency through our financial-grade blockchain forensics services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="gold">
                      <Link href="/report-scam">
                        Start Your Recovery
                        <TrendingUp className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                      <Link href="/contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}