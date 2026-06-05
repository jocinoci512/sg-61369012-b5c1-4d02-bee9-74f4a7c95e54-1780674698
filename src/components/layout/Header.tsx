import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, Shield, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/95 backdrop-blur-sm supports-[backdrop-filter]:bg-card/90 sticky top-0 z-50 shadow-sm">
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">CipherTrace</span>
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Recovery Experts</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/services" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="/resources" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="default" className="font-semibold">
            <a href="tel:+13435042112" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-mono">+1 343 504 2112</span>
            </a>
          </Button>
          <Button asChild variant="gold" size="default" className="shadow-md">
            <Link href="/report-scam">Report Fraud Case</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-7 w-7 text-primary" />
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-primary">CipherTrace</span>
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">Recovery Experts</span>
                </div>
              </div>
              
              <nav className="flex flex-col gap-6">
                <Link href="/services" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                  Services
                </Link>
                <Link href="/case-studies" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                  Case Studies
                </Link>
                <Link href="/resources" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                  Resources
                </Link>
                <Link href="/about" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                  About
                </Link>
                
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                  <Button asChild variant="outline" size="lg" className="w-full font-semibold">
                    <a href="tel:+13435042112" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="font-mono">+1 343 504 2112</span>
                    </a>
                  </Button>
                  <Button asChild variant="gold" size="lg" className="w-full">
                    <Link href="/report-scam">Report Fraud Case</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}