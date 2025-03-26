import { MoveLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CatalogProps {
  id: string;
  image: string;
  title: string;
  description: string;
  details: string;
}

const phoneNumber = "6281585040671";

const catalogList: CatalogProps[] = [
  {
    id: "gpt-shared-harian",
    image: "/shared-harian.png",
    title: "Akun GPT Shared Harian",
    description:
      "Akses cepat ke ChatGPT Plus (GPT-4) untuk kebutuhan harian. Cocok untuk uji coba, tugas, atau keperluan mendesak.",
    details:
      "Dapatkan akses instan ke GPT-4 dengan harga terjangkau. Tidak ada batasan waktu penggunaan selama 24 jam.",
  },
  {
    id: "gpt-shared-bulanan",
    image: "/shared-bulanan.png",
    title: "Akun GPT Shared Bulanan",
    description:
      "Langganan hemat akun GPT-4 shared dengan akses full fitur. Stabil, anti limit, dan tersedia setiap saat.",
    details:
      "Paket langganan bulanan yang ideal untuk pengguna rutin. Dapatkan akses stabil tanpa batas.",
  },
  {
    id: "gpt-private-premium",
    image: "/poster-katalog.png",
    title: "Akun GPT Premium Private",
    description:
      "Akun pribadi GPT-4 Plus dengan akses eksklusif. Full control, anti limit, cocok untuk profesional & power user.",
    details:
      "Solusi premium untuk pengguna profesional. Nikmati privasi dan kontrol penuh atas akun Anda.",
  },
  {
    id: "gpt-enterprise-team",
    image: "/poster-katalog.png",
    title: "GPT Team / Enterprise",
    description:
      "Layanan GPT khusus tim, startup, atau instansi. Termasuk manajemen akun, billing, dan support eksklusif.",
    details:
      "Didesain untuk organisasi besar. Dapatkan dukungan penuh untuk tim Anda, termasuk billing dan manajemen akun.",
  },
];

export function generateStaticParams() {
  return catalogList.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const product = catalogList.find((item) => item.id === params.id);

  if (!product) return {};

  return {
    title: `${product.title} - KolingDev`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.details,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = catalogList.find((item) => item.id === params.id);

  if (!product) return notFound();

  const whatsappMessage = `Halo, saya tertarik dengan produk *${product.title}*. Bisakah saya mendapatkan informasi lebih lanjut tentang paket ini?`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div>
      <Link
        href="/"
        className="flex items-center text-muted-foreground hover:text-primary transition mt-10 px-2"
      >
        <MoveLeftIcon className="size-5 mr-2" />
        <span>Kembali ke Halaman Utama</span>
      </Link>

      <section className="container pb-24">
        {/* Link kembali ke Landing Page */}

        <h2 className="text-lg text-center mb-2 mt-10">Katalog Produk {product.title}</h2>

        <div className="max-w-4xl mx-auto text-center">
          <Image
            src={product.image}
            width={800}
            height={500}
            alt={product.title}
            className="rounded-lg shadow-lg mx-auto"
          />

          <h1 className="text-4xl font-bold mt-6">{product.title}</h1>

          <p className="text-xl text-muted-foreground mt-2">
            {product.description}
          </p>

          <p className="mt-6 text-lg">{product.details}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-4 py-2 text-white bg-primary rounded-lg shadow hover:bg-primary/90 transition text-sm sm:text-base gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>

            <span className="text-xs sm:text-sm">
              Pesan Produk Sekarang
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}