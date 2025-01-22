import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
