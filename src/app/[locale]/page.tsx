import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t("Home.title")}</h1>
    </main>
  );
}
