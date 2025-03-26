"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CatalogProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const catalogList: CatalogProps[] = [
  {
    id: "gpt-shared-harian",
    image: "/catalog/gpt-shared-harian.jpg",
    title: "Akun GPT Shared Harian",
    description:
      "Akses cepat ke ChatGPT Plus (GPT-4) untuk kebutuhan harian. Cocok untuk uji coba, tugas, atau keperluan mendesak.",
  },
  {
    id: "gpt-shared-bulanan",
    image: "/catalog/gpt-shared-bulanan.jpg",
    title: "Akun GPT Shared Bulanan",
    description:
      "Langganan hemat akun GPT-4 shared dengan akses full fitur. Stabil, anti limit, dan tersedia setiap saat.",
  },
  {
    id: "gpt-private-premium",
    image: "/catalog/gpt-private-premium.jpg",
    title: "Akun GPT Premium Private",
    description:
      "Akun pribadi GPT-4 Plus dengan akses eksklusif. Full control, anti limit, cocok untuk profesional & power user.",
  },
  {
    id: "gpt-enterprise-team",
    image: "/catalog/gpt-enterprise.jpg",
    title: "GPT Team / Enterprise",
    description:
      "Layanan GPT khusus tim, startup, atau instansi. Termasuk manajemen akun, billing, dan support eksklusif.",
  },
];


export const CatalogSection = () => {
  return (
    <section id="catalog" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Katalog Produk
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Semua yang Kamu Butuhkan untuk Explore GPT-4
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Mulai dari akun harian untuk coba-coba, hingga akun private untuk keperluan serius — KolingDev punya semuanya. Tanpa limit. Tanpa drama.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalogList.map(({ id, image, title, description }) => (
          <Link key={id} href={`/catalog/${id}`}>
            <Card className="h-full bg-background border border-secondary rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-95 hover:shadow-xl cursor-pointer p-2">
              <div className="rounded-md overflow-hidden">
                <Image
                  src={image}
                  width={500}
                  height={400}
                  alt={title}
                  className="w-full h-52 object-cover transition-all duration-300 hover:opacity-80"
                />
              </div>

              <CardHeader className="text-center mt-4">
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center px-4 pb-6">
                {description}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
