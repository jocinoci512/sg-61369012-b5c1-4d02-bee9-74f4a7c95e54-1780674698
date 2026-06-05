import Link from "next/link";
import { Shield, Mail, Phone, MessageCircle, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const phoneNumber = "+1 (343) 504-2112";
  const phoneNumberRaw = "+13435042112";
  const whatsappUrl = "https://wa.me/13435042112?text=Hello%2C%20I%20need%20help%20with%20crypto%20security.";
  const telUrl = "tel:+13435042112";
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumberRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold">CipherTrace</span>
                <span className="text-xs text-primary-foreground/60 tracking-wide uppercase">Recovery Experts</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              Professional blockchain forensics and fund recovery assistance. Serving victims of crypto scams with financial-grade security expertise.
            </p>
            <div className="flex gap-3">
              <Badge variant="gold" className="text-xs">24/7 Support</Badge>
              <Badge variant="outline" className="text-xs border-primary-foreground/20 text-primary-foreground/80">Licensed Experts</Badge>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blockchain Forensics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Fund Recovery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Legal Support
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Education Center
                </Link>
              </li>
              <li>
                <Link href="/resources#guides" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Security Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              24/7 Support Line
            </h3>
            <div className="space-y-4">
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-5 rounded-xl">
                <p className="text-xs text-primary-foreground/60 mb-2 uppercase tracking-wide">Call or Text Anytime</p>
                <div className="flex items-center gap-2 mb-4">
                  <a 
                    href={telUrl} 
                    className="text-xl font-bold text-accent hover:text-accent/80 transition-colors font-mono"
                  >
                    {phoneNumber}
                  </a>
                  <button
                    onClick={copyPhone}
                    className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors text-primary-foreground/60 hover:text-accent"
                    aria-label="Copy phone number"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors group"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Support</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <Link 
                    href="/contact"
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email Support</span>
                  </Link>
                </div>
              </div>
              <Button asChild variant="gold" size="lg" className="w-full">
                <Link href="/report-scam">Report Fraud Case</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CipherTrace Recovery. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}