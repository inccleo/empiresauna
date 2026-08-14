import type { Locale } from "../lib/site";
import { hant } from "./zh-hant";
import { hans } from "./zh-cn";
import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";

export type Dict = typeof hant;

const dicts: Record<Locale, Dict> = {
  "zh-Hant": hant,
  "zh-CN": hans,
  en,
  ja,
  ko,
};

export function t(locale: Locale): Dict {
  return dicts[locale] ?? hant;
}

export { hant, hans, en, ja, ko };
