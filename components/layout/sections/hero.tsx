"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideLocate, MapPin, PinIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="flex flex-col items-center gap-4">
            <Badge>Promo</Badge>

            <span>Diskon akun GPT-4 premium mulai hari ini!</span>

            <Badge variant="outline" className="text-sm py-2">
              <MapPin className="size-4 mr-2" />
              <span>Melayani Seluruh Indonesia</span>
            </Badge>
          </div>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Akses GPT-4 Premium
              <span className="text-transparent px-2 bg-gradient-to-r from-black dark:from-white dark:to-primary to-primary bg-clip-text">
                Tanpa Batas
              </span>
              di KolingDev
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            KolingDev menyediakan akun ChatGPT Plus (GPT-4) dengan akses penuh tanpa limit, fitur lengkap, dan full garansi. Cocok untuk pelajar, developer, hingga profesional.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href={"#catalog"}>
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Lihat Pilihan Akun
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <Image
            width={600}
            height={600}
            className="w-full md:w-[600px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={theme === "light" ? "/banner.jpg" : "/banner.jpg"} // Ganti jika ada versi dark
            alt="KolingDev - Jual Akun ChatGPT GPT-4 Premium"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
