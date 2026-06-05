import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "How much do your recovery services cost?",
      answer: "We operate on a performance-based fee structure. You only pay when we successfully recover your funds. Our standard fee is 15-25% of recovered assets, depending on case complexity. Initial consultation and case assessment are completely free with no obligations."
    },
    {
      question: "What is your success rate for fund recovery?",
      answer: "We maintain a 99.8% success rate for cases we accept. Our blockchain forensics team has recovered $754M+ across 37,000+ cases since 2018. Success depends on factors like time elapsed, blockchain complexity, and evidence quality. We provide honest assessments during free consultations."
    },
    {
      question: "How long does the recovery process take?",
      answer: "Timeline varies by case complexity: Simple exchange fraud: 2-4 weeks. Cross-border scams: 4-8 weeks. Complex mixer/laundering cases: 8-16 weeks. We provide detailed timelines after initial investigation and keep you updated at every milestone."
    },
    {
      question: "Are your services legal and compliant?",
      answer: "Yes. We're a licensed digital asset recovery firm operating in full compliance with international AML/KYC regulations. Our investigators hold certifications from FBI, Interpol, and blockchain forensics authorities. We work directly with law enforcement and legal teams globally."
    },
    {
      question: "How do you protect my sensitive information?",
      answer: "We employ bank-grade encryption (AES-256) for all client data, maintain ISO 27001 security certification, and operate under strict NDA protocols. Your case details are stored on secure servers with multi-factor authentication and zero-knowledge architecture."
    },
    {
      question: "What happens during the recovery process?",
      answer: "1) Free consultation and case assessment. 2) Blockchain forensics investigation and asset tracing. 3) Legal coordination with exchanges and authorities. 4) Fund recovery and transfer to your secure wallet. 5) Full documentation and reporting for tax/legal purposes."
    },
    {
      question: "Do you offer refunds if recovery fails?",
      answer: "Because we operate on a success-based model, there are no upfront fees to refund. If we cannot recover your assets, you owe nothing. For cases we accept, our 99.8% success rate means failure is rare, but when it occurs, clients pay zero."
    },
    {
      question: "What types of crypto fraud cases do you handle?",
      answer: "We handle all fraud types: Investment scams (fake platforms, Ponzi schemes), Romance/pig butchering scams, Phishing and wallet compromises, Exchange hacks and exit scams, NFT rug pulls, Smart contract exploits, Ransomware payments, Insider theft. No case is too complex."
    },
    {
      question: "What qualifications does your team have?",
      answer: "Our team includes: Former FBI cyber crime investigators, Certified blockchain forensics analysts (CFCE, CCFE), Licensed private investigators in 48 jurisdictions, Smart contract security auditors, Legal professionals specializing in crypto law. Average team experience: 12+ years in digital forensics."
    },
    {
      question: "How can I get started with my case?",
      answer: "Contact us 24/7 via phone (+1 343 504 2112), WhatsApp, or our report form. We'll schedule a free 30-minute consultation to review your case, assess recovery likelihood, and outline next steps. Most clients start recovery within 48 hours of first contact."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="navy" className="mb-4">
            <HelpCircle className="h-3 w-3 mr-1" />
            Common Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our crypto fraud recovery process, pricing, and success rates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted rounded-2xl p-10 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our recovery specialists are available 24/7 to answer your questions and provide personalized guidance for your specific case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact">
                  Talk to a Specialist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/report-scam">Report Your Case</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}