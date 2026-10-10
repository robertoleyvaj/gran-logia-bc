import CuerpoPage from "@/components/masoneria/CuerpoPage";
import { getCuerpo } from "@/data/cuerpos";
import { getLocale } from "@/i18n/server";
import { dictionaries } from "@/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const c = getCuerpo("shriners", locale);
  return { title: `${c?.nombre} | ${dictionaries[locale].meta.suffix}`, description: c?.intro };
}

export default function ShrinersPage() {
  return <CuerpoPage slug="shriners" />;
}
