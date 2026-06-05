import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu, Shield, Phone, Search, ChevronDown, Users, MessageSquare, Building2 } from "lucide-react";
import { useState } from "react";
import { SearchCommand } from "./SearchCommand";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
              <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">CipherTrace</span>
              <span className="text-xs text-muted-foreground tracking-wide uppercase font-semibold">Recovery Experts</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/services" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/resources" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none">
                Company
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-xl">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="flex items-center gap-3 py-3 px-4 cursor-pointer">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">About Us</span>
                      <span className="text-xs text-muted-foreground">Our mission & values</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teams" className="flex items-center gap-3 py-3 px-4 cursor-pointer">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">Our Team</span>
                      <span className="text-xs text-muted-foreground">Expert investigators</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/testimonials" className="flex items-center gap-3 py-3 px-4 cursor-pointer">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">Testimonials</span>
                      <span className="text-xs text-muted-foreground">Client success stories</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-muted-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="default" className="font-semibold border-2">
              <a href="tel:+13435042112" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-mono">+1 343 504 2112</span>
              </a>
            </Button>
            <Button asChild variant="gold" size="default" className="shadow-md">
              <Link href="/report-scam">Report Fraud Case</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-muted-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
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
                  <Link href="/" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                    Home
                  </Link>
                  <Link href="/services" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                    Services
                  </Link>
                  <Link href="/case-studies" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                    Case Studies
                  </Link>
                  <Link href="/resources" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                    Resources
                  </Link>
                  
                  <div className="py-2 border-b border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Company</p>
                    <div className="flex flex-col gap-3">
                      <Link href="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2 pl-2">
                        <Building2 className="h-4 w-4" />
                        About Us
                      </Link>
                      <Link href="/teams" className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2 pl-2">
                        <Users className="h-4 w-4" />
                        Our Team
                      </Link>
                      <Link href="/testimonials" className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2 pl-2">
                        <MessageSquare className="h-4 w-4" />
                        Testimonials
                      </Link>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                    Contact
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
    </>
  );
}