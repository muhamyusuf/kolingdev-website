"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/avatars/user1.jpg",
    name: "Rama Wibowo",
    userName: "Software Engineer",
    comment:
      "Akun GPT-4 dari KolingDev benar-benar anti limit. Bisa pakai terus tanpa error. Sangat membantu kerjaan coding & dokumentasi.",
    rating: 5.0,
  },
  {
    image: "/avatars/user2.jpg",
    name: "Aulia Safitri",
    userName: "Mahasiswa S2",
    comment:
      "Baru pertama kali beli akun GPT-4 dan langsung puas! Respons admin cepat, akun ready pakai. Worth it banget!",
    rating: 4.9,
  },
  {
    image: "/avatars/user3.jpg",
    name: "Dimas Prasetyo",
    userName: "Freelancer AI Writer",
    comment:
      "Saya pakai akun dari KolingDev buat nulis artikel AI dan semuanya lancar. Dapat akses DALL·E dan GPT-4 Turbo juga!",
    rating: 5.0,
  },
  {
    image: "/avatars/user4.jpg",
    name: "Yuniarti",
    userName: "Data Analyst",
    comment:
      "Sangat terbantu dengan akun private GPT-4 dari KolingDev. Analisis data jadi lebih cepat & efisien.",
    rating: 4.8,
  },
  {
    image: "/avatars/user5.jpg",
    name: "Naufal Hidayat",
    userName: "Digital Marketer",
    comment:
      "Harga bersahabat, performa mantap, dan ada garansi. KolingDev recommended banget buat yang butuh akun ChatGPT premium.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimoni Pengguna
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Pengalaman Mereka Setelah Pakai KolingDev
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(Math.round(review.rating))].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      {/* <AvatarImage src={review.image} alt={review.name} /> */}
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
