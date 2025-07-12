import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Header from "@/component/Header/Header";
// import icon from "../../../public/images/logo.png"
import icon from "./favicon.ico"
import { Footer } from "@/component/Footer/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Sahl Cars - سهل كارز",
  description: "تمويل السيارات بأفضل الشروط | احصل على تمويل سيارات تويوتا، نيسان، هيونداي بأقل الأسعار وأسهل الإجراءات في السعودية. موافقات سريعة، أقساط ميسرة، وبدون عمولة.",
  keywords: [
    "تمويل سيارات",
    "تقسيط سيارات",
    "شركة تمويل",
    "تمويل سيارة جديدة",
    "تمويل سيارة مستعملة",
    "أفضل شركة تمويل",
    "شروط تمويل السيارات",
    "حاسبة التمويل",
    "تمويل بدون تحويل راتب",
    "تمويل سريع",
    "Toyota financing",
    "Nissan financing",
    "Hyundai financing",
    "car loan Saudi Arabia"
  ],
  // openGraph: {
  //   title: "Sahl Cars - تمويل السيارات في السعودية",
  //   description: "حلول تمويل مرنة لجميع أنواع السيارات الجديدة والمستعملة في المملكة العربية السعودية",
  //   url: "https://www.sahlcars.com",
  //   siteName: "Sahl Cars",
  //   images: [
  //     {
  //       url: "https://www.sahlcars.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Sahl Cars تمويل السيارات",
  //     },
  //   ],
  //   locale: "ar_SA",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Sahl Cars - تمويل السيارات في السعودية",
  //   description: "تمويل سريع وسهل للسيارات في المملكة العربية السعودية",
  //   images: ["https://www.sahlcars.com/twitter-card.jpg"],
  // },
  icons: icon.src,
};


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;

}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-H1RN4HNPTY`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1RN4HNPTY');
          `}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-59JW47HK');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59JW47HK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider>
          <Header lo={locale}></Header>
          {children}
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
