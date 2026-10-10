import CuerpoPage from "@/components/masoneria/CuerpoPage";
import { getCuerpo } from "@/data/cuerpos";
import { getLocale } from "@/i18n/server";
import { dictionaries } from "@/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const c = getCuerpo("widows-sons", locale);
  return { title: `${c?.nombre} | ${dictionaries[locale].meta.suffix}`, description: c?.intro };
}

export default function WidowsSonsPage() {
  return <CuerpoPage slug="widows-sons" />;
}
