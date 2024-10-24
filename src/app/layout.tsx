import "./globals.css";
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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