'use client'
import { useEffect } from "react";
import "./globals.css";
import Head from 'next/head';
import Lenis from "lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Velammel Hospitals</title>
        <link rel="icon" href="../app/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}