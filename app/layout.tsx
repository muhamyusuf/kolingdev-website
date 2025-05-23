import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KolingDev - Landing Page",
  description: "Butuh ChatGPT Plus tapi tanpa batasan? KolingDev jual akun ChatGPT GPT-4 premium anti limit dengan full garansi. Bisa akses semua model premium: GPT-4, GPT-4 Turbo, DALL·E, dan lainnya!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen max-w-[1440px] mx-auto bg-background tracking-tighter", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>

        <GoogleAnalytics gaId="G-ZZ5SDDZRHD" />
      </body>
    </html>
  );
}
