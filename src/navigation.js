import { enUS, ptBR } from 'date-fns/locale';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['en', 'pt'],
  dateFnsLocales = {
    en: enUS,
    pt: ptBR
  };

const sharedPathnamesNavigation = createSharedPathnamesNavigation({ locales });

export { locales, dateFnsLocales };
export const { Link, redirect, usePathname, useRouter } =
  sharedPathnamesNavigation;
