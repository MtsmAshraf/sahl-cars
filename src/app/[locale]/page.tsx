import LangSwitch from "@/component/LangSwitch";
// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import "./globals.css";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params
  // const t = useTranslations('HomePage');
  const t = await getTranslations('HomePage');
  return (
    <div>
    <div className="container">
      <LangSwitch lo={locale} />
      {
        t("title")
      }
    </div>
    </div>
  );
}
