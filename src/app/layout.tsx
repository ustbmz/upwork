import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { UI_PRESET_STORAGE_KEY } from "@/lib/ui-preset";
import { UiPresetProvider } from "@/components/ui-preset-provider";
import "./globals.css";

const heading = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meridian Holdings — Corporate landing (demo)",
  description:
    "Traditional holding-company landing: Next.js, Tailwind CSS, responsive layout, portfolio section, and contact form. Vercel-ready.",
  openGraph: {
    title: "Meridian Holdings — Corporate landing (demo)",
    description:
      "Classic corporate template for portfolio and client pitches—clear typography and restrained layout.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const presetBoot = `(function(){try{var k=${JSON.stringify(UI_PRESET_STORAGE_KEY)};var p=localStorage.getItem(k);if(p==="minimal-dark"||p==="minimal-light"||p==="traditional")document.documentElement.setAttribute("data-ui-preset",p);}catch(e){}})();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--ui-bg)] font-sans text-[var(--ui-fg)]">
        <Script id="ui-preset-boot" strategy="beforeInteractive">
          {presetBoot}
        </Script>
        <UiPresetProvider>{children}</UiPresetProvider>
      </body>
    </html>
  );
}
