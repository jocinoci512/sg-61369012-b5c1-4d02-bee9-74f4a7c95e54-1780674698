import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

export default function Header() {
  const whatsappUrl = "https://wa.me/19402384915?text=Hello%2C%20I%20need%20help%20with%20a%20crypto%20fraud%20case.";

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-slate-900 text-lg hover:text-blue-600 transition-colors">
          CipherTrace
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          <Link href="/about#team" className="hover:text-slate-900 transition-colors">Teams</Link>
          <Link href="/reviews" className="hover:text-slate-900 transition-colors font-medium">Testimonials</Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp
            </a>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/report-scam">Report Fraud Case</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-slate-700 hover:text-slate-900 py-2 border-b">Home</Link>
                <Link href="/about" className="text-slate-700 hover:text-slate-900 py-2 border-b">About Us</Link>
                <Link href="/services" className="text-slate-700 hover:text-slate-900 py-2 border-b">Services</Link>
                <Link href="/about#team" className="text-slate-700 hover:text-slate-900 py-2 border-b">Teams</Link>
                <Link href="/reviews" className="text-slate-700 hover:text-slate-900 py-2 border-b font-medium">Testimonials</Link>
                <Link href="/contact" className="text-slate-700 hover:text-slate-900 py-2 border-b">Contact Us</Link>
                <div className="flex flex-col gap-3 mt-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
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