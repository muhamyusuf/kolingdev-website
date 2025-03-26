import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CatalogSection } from "@/components/layout/sections/catalog";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "KolingDev - Akun ChatGPT Premium Anti Limit & Full Garansi",
  description:
    "Butuh ChatGPT Plus tapi tanpa batasan? KolingDev jual akun ChatGPT GPT-4 premium anti limit dengan full garansi. Bisa akses semua model premium: GPT-4, GPT-4 Turbo, DALL·E, dan lainnya!",
  openGraph: {
    type: "website",
    url: "https://www.kolingdev.me/",
    title: "KolingDev - Akun ChatGPT Premium Anti Limit & Full Garansi",
    description:
      "Dapatkan akun ChatGPT Plus (GPT-4) siap pakai dari KolingDev. Anti limit, full garansi, dan akses lengkap ke semua fitur premium seperti GPT-4 Turbo, DALL·E, dan lainnya.",
    images: [
      {
        url: "https://www.kolingdev.me/_next/image?url=%2Fbanner.jpg&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "KolingDev - ChatGPT Premium Anti Limit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.kolingdev.me/",
    title: "KolingDev - Jual Akun ChatGPT GPT-4 Anti Limit",
    description:
      "Akun ChatGPT Plus anti limit dengan akses penuh ke GPT-4, GPT-4 Turbo, DALL·E, Code Interpreter, dan lainnya. Full garansi dan support cepat. Beli di KolingDev sekarang!",
    images: [
      "https://www.kolingdev.me/_next/image?url=%2Fbanner.jpg&w=1200&q=75",
    ],
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Akses GPT-4 Premium Tanpa Batas
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        KolingDev menyediakan berbagai pilihan akun ChatGPT Plus (GPT-4) — mulai dari harian hingga enterprise. Semua akun dijamin anti limit, full fitur, dan bergaransi!
      </h3>


      <BenefitsSection />
      <CatalogSection />
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <PricingSection />
      {/* <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
