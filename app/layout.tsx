import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
// import { AOSInit } from "@/lib/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Duc Portfolio",
  description: "Welcome to my portfolio website, I'm Nguyen Duc, a web designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <html lang="en">
        {/* <AOSInit/> */}
      <body className={`dark:bg-[#1f1f1f] ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}
