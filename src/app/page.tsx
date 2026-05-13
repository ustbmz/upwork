import { AboutStrip } from "@/components/about-strip";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PortfolioSection } from "@/components/portfolio-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--ui-bg)] text-[var(--ui-fg)]">
        <Hero />
        <AboutStrip />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
