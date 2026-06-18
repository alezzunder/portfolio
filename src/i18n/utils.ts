import { en, type Translations } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';
export type { Translations };

const ui: Record<Lang, Translations> = { en, es };

export function getTranslations(lang: Lang): Translations {
  return ui[lang] ?? ui.en;
}
