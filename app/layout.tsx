import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIFLOW OS — Tu copiloto financiero y de vida",
  description:
    "El sistema operativo para la vida adulta. Organiza tu dinero, tu tiempo y tus metas con automatización e IA. De caos a claridad, control y crecimiento.",
  openGraph: {
    title: "LIFLOW OS — Tu copiloto financiero y de vida",
    description:
      "No necesitas más disciplina ni más apps. Necesitas un sistema. Diagnóstico financiero gratuito.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${instrument.variable} ${hanken.variable} ${jbMono.variable} grain`}
      >
        {children}
      </body>
    </html>
  );
}
