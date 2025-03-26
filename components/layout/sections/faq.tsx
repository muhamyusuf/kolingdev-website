import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu akun ChatGPT Premium shared dari KolingDev?",
    answer:
      "Akun ChatGPT Premium shared adalah akun bersama yang memungkinkan kamu mengakses GPT-4, GPT-4 Turbo, DALL·E, dan fitur premium lainnya tanpa perlu berlangganan langsung ke OpenAI.",
    value: "item-1",
  },
  {
    question: "Apakah akun ini benar-benar anti limit?",
    answer:
      "Ya. Kami menggunakan sistem pembagian akun yang aman dan efisien sehingga pengguna tetap bisa mengakses GPT-4 tanpa gangguan limit seperti biasa.",
    value: "item-2",
  },
  {
    question: "Apa saja fitur yang bisa saya akses?",
    answer:
      "Kamu akan mendapatkan akses ke GPT-4, GPT-4 Turbo, DALL·E, Vision (gambar), Code Interpreter, dan fitur premium lainnya yang tersedia di ChatGPT Plus.",
    value: "item-3",
  },
  {
    question: "Apakah layanan ini bergaransi?",
    answer:
      "Tentu! Setiap pembelian dilindungi garansi penuh sesuai durasi yang kamu pilih. Jika ada masalah, kamu bisa langsung hubungi admin.",
    value: "item-4",
  },
  {
    question: "Bagaimana cara beli atau langganan?",
    answer:
      "Kamu cukup klik tombol beli di bagian harga, lalu akan diarahkan ke WhatsApp untuk melakukan pemesanan dan pembayaran. Cepat dan mudah!",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Pertanyaan Umum
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
