import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['en', 'pt'];

const defaultLocale = locales[0];

const sharedPathnamesNavigation = createSharedPathnamesNavigation({ locales });

export { locales, defaultLocale };
export const { Link, redirect, usePathname, useRouter } =
  sharedPathnamesNavigation;
