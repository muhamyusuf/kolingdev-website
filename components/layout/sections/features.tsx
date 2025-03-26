import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ShieldCheck",
    title: "Material Berkualitas",
    description:
      "Kami menggunakan bahan terbaik seperti granit dan marmer untuk memastikan ketahanan dan keindahan batu nisan serta prasasti.",
  },
  {
    icon: "Brush",
    title: "Desain Elegan & Eksklusif",
    description:
      "Setiap batu nisan dan prasasti dibuat dengan desain khusus dan bisa disesuaikan dengan keinginan pelanggan.",
  },
  {
    icon: "Truck",
    title: "Pengiriman & Pemasangan",
    description:
      "Kami menyediakan layanan pengiriman dan pemasangan di lokasi yang Anda inginkan dengan proses cepat dan aman.",
  },
  {
    icon: "Heart",
    title: "Menghormati Kenangan",
    description:
      "Kami membantu Anda menciptakan monumen yang indah untuk mengenang orang tercinta dengan penuh penghormatan.",
  },
  {
    icon: "Wrench",
    title: "Restorasi & Perbaikan",
    description:
      "Kami juga melayani restorasi batu nisan lama agar tetap terlihat baru dan terawat dengan baik.",
  },
  {
    icon: "ClipboardCheck",
    title: "Pemesanan Mudah",
    description:
      "Kami menyediakan layanan konsultasi dan pemesanan yang mudah melalui telepon, WhatsApp, atau kunjungan langsung ke lokasi kami.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Keunggulan Kami
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Kenapa Memilih Layanan Kami?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Kami berkomitmen untuk memberikan layanan berkualitas dalam pembuatan
        batu nisan dan prasasti, dengan perhatian penuh pada detail dan kepuasan
        pelanggan.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
