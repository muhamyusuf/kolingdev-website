import { MessageCircleIcon, MoveLeftIcon } from "lucide-react";
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

const phoneNumber = "6285664813597";

const catalogList: CatalogProps[] = [
  {
    id: "batu-nisan",
    image: "/catalog/nisan-custom.jpg",
    title: "Batu Nisan",
    description:
      "Batu nisan custom nama granit berkualitas tinggi dengan berbagai desain elegan dan tahan lama.",
    details: "Batu nisan custom dengan berbagai pilihan desain dan material.",
  },
  {
    id: "prasasti-peresmian",
    image: "/catalog/marmer-peresmian.jpg",
    title: "Prasasti Peresmian",
    description:
      "Pembuatan prasasti untuk peresmian gedung, tempat ibadah, dan fasilitas umum dengan ukiran berkualitas.",
    details: "Prasasti peresmian dengan berbagai pilihan bahan dan ukiran.",
  },
  {
    id: "ukiran-nama-dan-doa",
    image: "/catalog/granit-custom-nama.jpg",
    title: "Ukiran Nama & Doa",
    description:
      "Ukiran nama dan doa yang presisi dengan berbagai pilihan gaya tulisan, bahan, dan hiasan.",
    details: "Ukiran nama dan doa dengan berbagai pilihan desain dan material.",
  },
  {
    id: "restorasi-nisan",
    image: "/catalog/bersihkan-nisan.jpg",
    title: "Restorasi & Bersikan Batu Nisan",
    description:
      "Layanan perbaikan, restorasi, dan pembersihan batu nisan lama agar kembali terlihat seperti baru.",
    details: "Layanan perbaikan dan restorasi batu nisan lama.",
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
    title: `${product.title} - INSANI Batu Nisan & Prasasti`,
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

  const whatsappMessage = `Halo, saya tertarik dengan produk *${product.title}*. Bisakah saya mendapatkan informasi lebih lanjut?`;
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

        <h2 className="text-lg text-center mb-2 mt-10">Katalog Produk</h2>

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
            className="mt-6 inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-white bg-green-500 rounded-lg shadow hover:bg-green-600 transition text-sm sm:text-base"
          >
            <Image
              src={"/WhatsApp.svg"}
              alt="WhatsApp Insani"
              width={30}
              height={30}
              className="mr-2 sm:w-9 sm:h-9"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              Pesan Produk Sekarang
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
