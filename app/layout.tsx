import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nizar Alghifary",
  description: "I'm just a nerd",
  icons: {
    icon: "/N-Icon.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-[#fef8ec] p-10">
        <header className="mb-8">
          <Image
            src="/Icon.png"
            alt="Nizar Alghifary"
            width={100}
            height={100}
            quality={90}
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}