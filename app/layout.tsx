import type { Metadata } from 'next';
import { Inter, Mukta } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '@/components/shared/navbar/NavBar';
import Footer from '@/components/shared/footer/Footer';

// ** Font declaration
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});
const mukta = Mukta({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-mukta',
});

//* SEO
export const metadata: Metadata = {
  title: 'Portal Escolar',
  description:
    'Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo constantemente menções e congratulações em todo o estado de São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mukta.variable} mx-auto flex h-full max-w-[1920px] flex-col`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
