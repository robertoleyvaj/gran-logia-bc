import { redirect } from "next/navigation";
import { getLocale } from "@/i18n/server";
import { localizeHref } from "@/i18n/config";

export default async function LaGranLogia() {
  redirect(localizeHref("/la-gran-logia/gran-cuadro", await getLocale()));
}
