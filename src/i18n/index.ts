import type { Locale } from "../lib/site";
import { hant } from "./zh-hant";
import { hans } from "./zh-cn";

export type Dict = typeof hant;

export function t(locale: Locale): Dict {
  return locale === "zh-CN" ? hans : hant;
}

export { hant, hans };
