import LangSwitch from "@/component/LangSwitch/LangSwitch";
// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import Hero from "@/component/Hero/Hero";
import Why from "@/component/Why/Why";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params
  // const t = useTranslations('HomePage');
  const t = await getTranslations('HomePage');
  return (
    <main>
      <Hero />
      <Why />
    </main>
  );
}
