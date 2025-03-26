import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Pembuatan Batu Nisan Custom",
    description:
      "Kami menyediakan layanan pembuatan batu nisan dengan desain dan material sesuai keinginan pelanggan.",
    pro: 1,
  },
  {
    title: "Ukiran Nama dan Doa",
    description:
      "Menghadirkan ukiran nama dan doa dengan teknik ukir yang presisi dan elegan.",
    pro: 0,
  },
  {
    title: "Prasasti Peresmian",
    description:
      "Melayani pembuatan prasasti peresmian untuk berbagai keperluan seperti gedung, tempat ibadah, dan fasilitas umum.",
    pro: 1,
  },
  {
    title: "Pengiriman dan Pemasangan",
    description:
      "Kami menyediakan layanan pengiriman dan pemasangan batu nisan langsung ke lokasi.",
    pro: 0,
  },
  {
    title: "Restorasi dan Perbaikan",
    description:
      "Layanan restorasi dan perbaikan batu nisan agar tetap terawat dan terlihat baru.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Layanan Kami
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Kualitas dan Keindahan dalam Setiap Detail
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Kami menghadirkan layanan pembuatan batu nisan dan prasasti dengan
        kualitas terbaik, desain eksklusif, dan pengerjaan profesional.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>

            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute bg-primary text-white -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
