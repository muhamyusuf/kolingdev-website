import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  duration: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Harian",
    popular: 0,
    price: 5000,
    duration: " /hari",
    description: "Akses ChatGPT Premium harian, cocok untuk kebutuhan cepat.",
    buttonText: "Beli Sekarang",
    benefitList: [
      "Akses GPT-4 & GPT-4 Turbo",
      "Bebas limit",
      "DALL·E & Code Interpreter",
      "Support via WhatsApp",
      "Garansi aktif 1 hari",
    ],
  },
  {
    title: "Mingguan",
    popular: 1,
    price: 10000,
    duration: " /minggu",
    description:
      "Paket hemat mingguan dengan fitur lengkap dan stabilitas terbaik.",
    buttonText: "Langganan Sekarang",
    benefitList: [
      "Akses GPT-4 & GPT-4 Turbo",
      "DALL·E, Vision, dan Tools AI lainnya",
      "Anti limit & performa cepat",
      "Full support + garansi",
      "Aktif selama 7 hari",
    ],
  },
  {
    title: "Bulanan",
    popular: 0,
    price: 30000,
    duration: " /bulan",
    description:
      "Paket paling ekonomis untuk pemakaian rutin dan produktif setiap hari.",
    buttonText: "Pilih Paket",
    benefitList: [
      "Akses penuh GPT-4, Turbo, DALL·E",
      "Bebas limit, performa optimal",
      "Integrasi semua fitur premium",
      "Full garansi & support 24 jam",
      "Masa aktif 30 hari",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Harga Paket
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Mulai akses ChatGPT Premium sekarang
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Pilih paket yang sesuai kebutuhanmu, mulai dari harian hingga bulanan. Semua paket bergaransi dan anti limit.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, duration, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">
                    Rp{price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-muted-foreground">{duration}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
