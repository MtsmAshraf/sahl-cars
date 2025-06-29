// import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";
import Contact from "@/component/Contact/Contact";
import "./globals.css";
import Hero from "@/component/Hero/Hero";
import Why from "@/component/Why/Why";

export default async function Home() {
  // const { locale } = await params
  // const t = useTranslations('HomePage');
  // const t = await getTranslations('HomePage');
  return (
    <main>
      <Hero />
      <Why />
      <Contact />
    </main>
  );
}
