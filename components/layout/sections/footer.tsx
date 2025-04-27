import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link
              href="/"
              className="font-bold text-lg flex items-center gap-2"
            >
              <Image
                src="/logo-kolingdev.png"
                alt="KolingDev Logo"
                className="w-10 h-10 rounded-md object-cover"
                width={40}
                height={40}
              />
              KolingDev
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Jual akun ChatGPT Premium anti limit & full garansi. Akses GPT-4, GPT-4 Turbo, DALL·E, dan lainnya.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Kontak</h3>
            <div>
              <Link
                href="https://wa.me/6281585040671"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                WhatsApp Admin
              </Link>
            </div>

            <div>
              <Link
                href="https://x.com/kolingdev"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                X - Twitter
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/kolingdev/"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Instagram - KolingDev
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Bantuan</h3>
            <div>
              <Link href="#footer" className="opacity-60 hover:opacity-100">
                Hubungi Kami
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ - Pertanyaan
              </Link>
            </div>

            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100">
                Paket & Harga
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-sm text-muted-foreground text-center">
          <h3>
            &copy; 2025 KolingDev. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
