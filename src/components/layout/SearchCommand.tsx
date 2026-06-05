import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, FileText, ShieldCheck, BookOpen, Users, Mail, Briefcase, Scale } from "lucide-react";

const searchableContent = [
  // Pages
  { title: "Home", url: "/", category: "Pages", icon: FileText },
  { title: "Services Overview", url: "/services", category: "Pages", icon: Briefcase },
  { title: "Case Studies", url: "/case-studies", category: "Pages", icon: Scale },
  { title: "Resources & Blog", url: "/resources", category: "Pages", icon: BookOpen },
  { title: "Our Team", url: "/teams", category: "Pages", icon: Users },
  { title: "Client Testimonials", url: "/testimonials", category: "Pages", icon: ShieldCheck },
  { title: "About Us", url: "/about", category: "Pages", icon: FileText },
  { title: "Contact Us", url: "/contact", category: "Pages", icon: Mail },
  { title: "Success Stories", url: "/success-stories", category: "Pages", icon: ShieldCheck },
  { title: "Report Fraud Case", url: "/report-scam", category: "Pages", icon: ShieldCheck },
  
  // Services
  { title: "Blockchain Forensics", url: "/services#forensics", category: "Services", icon: Briefcase },
  { title: "Asset Recovery", url: "/services#recovery", category: "Services", icon: Briefcase },
  { title: "Legal Support", url: "/services#legal", category: "Services", icon: Scale },
  { title: "Prevention Consulting", url: "/services#prevention", category: "Services", icon: ShieldCheck },
  { title: "Expert Testimony", url: "/services#testimony", category: "Services", icon: Scale },
  { title: "DeFi Security Audits", url: "/services#defi", category: "Services", icon: ShieldCheck },
  
  // Resources
  { title: "How to Spot Crypto Scams", url: "/resources#scams", category: "Resources", icon: BookOpen },
  { title: "Blockchain Forensics Explained", url: "/resources#forensics", category: "Resources", icon: BookOpen },
  { title: "Recovery Process Guide", url: "/resources#process", category: "Resources", icon: BookOpen },
  { title: "Legal Rights After Fraud", url: "/resources#legal", category: "Resources", icon: BookOpen },
  
  // Quick Actions
  { title: "Call 24/7 Support: +1 343 504 2112", url: "tel:+13435042112", category: "Quick Actions", icon: Mail },
  { title: "Schedule Consultation", url: "/contact", category: "Quick Actions", icon: Mail },
  { title: "View Client Reviews", url: "/reviews", category: "Quick Actions", icon: ShieldCheck },
];

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (url: string) => {
    onOpenChange(false);
    
    // Handle telephone links
    if (url.startsWith("tel:")) {
      window.location.href = url;
      return;
    }
    
    // Only navigate if we're not already on this page
    // This prevents "hard navigate to same URL" errors
    if (router.asPath !== url) {
      router.push(url);
    }
  };

  if (!mounted) return null;

  const groupedContent = searchableContent.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchableContent>);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, services, resources..." className="font-sans" />
      <CommandList>
        <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
          No results found.
        </CommandEmpty>
        {Object.entries(groupedContent).map(([category, items]) => (
          <CommandGroup key={category} heading={category} className="font-serif">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.url}
                  value={item.title}
                  onSelect={() => handleSelect(item.url)}
                  className="cursor-pointer"
                >
                  <Icon className="mr-3 h-4 w-4 text-primary" />
                  <span className="font-sans">{item.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}