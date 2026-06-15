import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, Send, Twitter, ExternalLink, AlertOctagon, Phone, MessageCircle, Smartphone, Copy, Check, Clock, MapPin, Shield } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    try {
      const emailContent = `
NEW CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Submitted: ${new Date().toLocaleString()}
      `.trim();

      const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (!web3formsKey) {
        throw new Error("Email service not configured. Please contact support directly at support@recovery-ciphertrace.com");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Contact Form: ${subject}`,
          from_name: name,
          email: email,
          message: emailContent,
          to_email: "support@recovery-ciphertrace.com"
        }),
      });

      const result = await response.json();

      if (result.success) {
        const payload = {
          id: crypto.randomUUID(),
          name,
          email,
          subject,
          message,
          createdAt: new Date().toISOString(),
          source: "contact"
        };

        try {
          const raw = window.localStorage.getItem("site_messages");
          const list = raw ? JSON.parse(raw) : [];
          list.push(payload);
          window.localStorage.setItem("site_messages", JSON.stringify(list));
        } catch (storageError) {
          console.error("LocalStorage save failed:", storageError);
        }

        setSubmitted(true);
        setSubmitting(false);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again or email us directly at support@recovery-ciphertrace.com");
      console.error("Contact form error:", err);
    }
  };

  // Contact URLs
  const phoneNumber = "+13435042112";
  const displayPhone = "+1 (343) 504-2112";
  const whatsappUrl = `https://wa.me/13435042112?text=${encodeURIComponent("Hello, I need help with crypto fraud case support.")}`;
  const smsUrl = `sms:${phoneNumber}`;
  const telUrl = `tel:${phoneNumber}`;

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <>
      <Head>
        <title>Contact CipherTrace Recovery | 24/7 Crypto Fraud Support</title>
        <meta name="description" content="Contact CipherTrace Recovery for professional blockchain forensics and cryptocurrency recovery assistance. Available 24/7 via phone, WhatsApp, and email." />
        <meta name="keywords" content="contact crypto recovery, blockchain forensics support, report crypto scam, crypto fraud assistance, 24/7 recovery support" />
        <meta property="og:title" content="Contact CipherTrace Recovery | Professional Crypto Investigation" />
        <meta property="og:description" content="Reach out to our blockchain forensics team for immediate assistance with cryptocurrency fraud and asset recovery." />
        <meta property="og:url" content="https://ciphertracers.com/contact" />
        <link rel="canonical" href="https://ciphertracers.com/contact" />
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
                  <Phone className="h-4 w-4" />
                  24/7 Emergency Support
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Get Help Immediately
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Our fraud recovery specialists are available 24/7 to assist with urgent cases. Call, text, or message us on WhatsApp now.
                </p>

                <Card className="inline-flex items-center gap-4 p-6 bg-card/95 backdrop-blur-sm border-accent/20 max-w-md mx-auto">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Emergency Hotline</p>
                    <div className="flex items-center gap-2">
                      <a href="tel:+13435042112" className="font-mono text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                        +1 343 504 2112
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={copyPhone}
                      >
                        {copiedPhone ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </section>

          {/* 24/7 Contact Banner */}
          <section className="py-8 bg-accent text-accent-foreground">
            <div className="container">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Immediate Assistance Available</h2>
                  <p className="text-accent-foreground/90 text-lg">Connect instantly via phone, WhatsApp, iMessage, or SMS</p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                    <a href={telUrl} className="text-accent-foreground font-mono font-bold text-2xl hover:text-accent-foreground/80 transition-colors">
                      {displayPhone}
                    </a>
                    <button
                      onClick={copyPhone}
                      className="p-2 hover:bg-accent-foreground/10 rounded transition-colors"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[140px] shadow-md">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 min-w-[140px]">
                    <a href={smsUrl}>
                      <Smartphone className="mr-2 h-5 w-5" />
                      iMessage/SMS
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 min-w-[140px]">
                    <a href={telUrl}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Direct
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Information Section */}
          <section className="py-20 bg-card">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div>
                  <div className="mb-8">
                    <Badge variant="navy" className="mb-4">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Send Message
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Describe Your Case
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Fill out the form below with details about your situation. Our team will review and respond within 1-2 hours during business hours.
                    </p>
                  </div>

                  <Card className="shadow-xl border-border">
                    <CardContent className="pt-8">
                      {error && (
                        <Alert variant="destructive" className="mb-6">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                      {submitted && (
                        <Alert className="mb-6 border-accent/20 bg-accent/5">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <AlertDescription className="text-foreground">
                            Thank you! Your message has been received. Our team will respond within 1-2 hours during business hours (9 AM - 6 PM EST).
                          </AlertDescription>
                        </Alert>
                      )}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                          <Input id="name" name="name" type="text" placeholder="John Doe" className="mt-2 h-11" required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" className="mt-2 h-11" required />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
                          <Input id="subject" name="subject" type="text" placeholder="Brief description of your case" className="mt-2 h-11" required />
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                          <Textarea id="message" name="message" placeholder="Please provide details about the fraud incident, amount involved, and any relevant information..." rows={6} className="mt-2" required />
                        </div>
                        <Button type="submit" size="lg" variant="gold" className="w-full h-12 text-base" disabled={submitting}>
                          {submitting ? "Sending..." : "Submit Case Inquiry"}
                          <Send className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-sm text-muted-foreground text-center">
                          All information is kept strictly confidential and protected by attorney-client privilege.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Emergency Contact Card */}
                  <Card className="shadow-xl border-accent/30 bg-gradient-to-br from-accent/5 to-card">
                    <CardHeader className="border-b bg-accent/5">
                      <CardTitle className="text-2xl flex items-center">
                        <Phone className="h-7 w-7 mr-3 text-accent" />
                        24/7 Emergency Line
                      </CardTitle>
                      <CardDescription>
                        Immediate assistance for urgent cryptocurrency fraud cases
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <div className="text-center p-6 bg-card rounded-xl border border-border">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Direct Support Line</p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <a href={telUrl} className="text-4xl font-bold text-primary hover:text-primary/80 font-mono transition-colors">
                            {displayPhone}
                          </a>
                          <button
                            onClick={copyPhone}
                            className="p-2.5 hover:bg-muted rounded-lg transition-colors text-primary"
                            aria-label="Copy phone number"
                          >
                            {copiedPhone ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
                          </button>
                        </div>
                        <Badge variant="gold" className="text-sm">
                          Average response: &lt;5 minutes
                        </Badge>
                      </div>
                      
                      <div className="grid gap-3">
                        <Button asChild size="lg" variant="gold" className="w-full h-14 text-base">
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-3 h-5 w-5" />
                            <div className="text-left flex-1">
                              <div className="font-semibold">WhatsApp Chat</div>
                              <div className="text-xs opacity-90">Instant encrypted messaging</div>
                            </div>
                          </a>
                        </Button>
                        
                        <Button asChild size="lg" variant="outline" className="w-full h-14 text-base">
                          <a href={smsUrl}>
                            <Smartphone className="mr-3 h-5 w-5" />
                            <div className="text-left flex-1">
                              <div className="font-semibold">iMessage / SMS</div>
                              <div className="text-xs text-muted-foreground">Text message support</div>
                            </div>
                          </a>
                        </Button>
                        
                        <Button asChild size="lg" variant="outline" className="w-full h-14 text-base">
                          <a href={telUrl}>
                            <Phone className="mr-3 h-5 w-5" />
                            <div className="text-left flex-1">
                              <div className="font-semibold">Direct Phone Call</div>
                              <div className="text-xs text-muted-foreground">Speak with investigators</div>
                            </div>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email Contact */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <Mail className="h-6 w-6 mr-2 text-primary" />
                        Email Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">For detailed case documentation and non-urgent inquiries:</p>
                      <a href="mailto:support@recovery-ciphertrace.com" className="text-primary hover:text-primary/80 font-semibold text-lg break-all transition-colors">
                        support@recovery-ciphertrace.com
                      </a>
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Response time: 1-2 hours (business hours) • 24 hours (after hours)</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Location */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <MapPin className="h-6 w-6 mr-2 text-primary" />
                        Headquarters
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        <strong className="text-foreground">CipherTrace Recovery</strong>
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Blockchain Avenue<br />
                        Financial District<br />
                        New York, NY 10004<br />
                        United States
                      </p>
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Office Hours:</strong> Monday-Friday, 9 AM - 6 PM EST<br />
                          <strong className="text-foreground">Emergency Line:</strong> 24/7/365
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <Twitter className="h-6 w-6 mr-2 text-primary" />
                        Follow Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Stay updated with the latest in blockchain security and fraud prevention:</p>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="https://twitter.com/CipherTracers" target="_blank" rel="noopener noreferrer">
                          @CipherTracers on Twitter
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Report Scam CTA Section */}
          <section className="py-20 bg-destructive/5 border-y border-destructive/20">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
                  <AlertOctagon className="h-8 w-8 text-destructive" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Active Fraud Case?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  If you're currently experiencing cryptocurrency fraud, use our specialized scam reporting form to document the incident and begin immediate investigation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="gold" className="text-base">
                    <Link href="/report-scam">
                      Report Fraud Case
                      <Send className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link href="/case-studies">
                      View Success Stories
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Also report to authorities: <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">IC3.gov (USA)</a> • <a href="https://www.actionfraud.police.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">ActionFraud (UK)</a>
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}