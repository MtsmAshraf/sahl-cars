// import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";
import Contact from "@/component/Contact/Contact";
import "./globals.css";
import Hero from "@/component/Hero/Hero";
import Features from "@/component/Features/Features";
import Steps from "@/component/Steps/Steps";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params
  // const t = useTranslations('HomePage');
  // const t = await getTranslations('HomePage');
  return (
    <main>
      <Hero lo={locale} />
      <Features lo={locale} />
      <Steps lo={locale} />
      <Contact lo={locale}/>
    </main>
  );
}
