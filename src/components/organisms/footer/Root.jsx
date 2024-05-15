import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

import { Icon, Link, Text } from '@/components/atoms';
import { TextDescription } from '@/components/atoms/text';
import {
  Action,
  BentoGrid,
  Card,
  LocaleChanger,
  Logo,
  Section,
  ThemeChanger
} from '@/components/molecules';
import { cn, translationKeys } from '@/utils';

const Footer = ({ className, ...props }) => {
  const global = useTranslations(),
    t = useTranslations('footer');

  return (
    <Section
      asChild
      className={cn('my-0 rounded-b-none !pb-0', className)}
      color='muted'
      size='full'
      variant='solid'
      {...props}
    >
      <footer>
        <div className='mx-auto flex w-full max-w-bounds flex-col items-center'>
          <div className='relative mb-xs grid w-9/10 gap-sm sm:grid-cols-3'>
            <section>
              <Logo />

              <TextDescription className='mt-2 text-sm/normal sm:max-w-72'>
                {t('description')}
              </TextDescription>

              <nav className='mt-6 flex w-fit gap-1 rounded-sm bg-active p-1'>
                {translationKeys(global, 'personalInfo.socials').map((key) => (
                  <Action
                    className='aspect-square px-0'
                    color='primary'
                    href={global(`personalInfo.socials.${key}.href`)}
                    key={key}
                    size='xs'
                    variant='ghost'
                  >
                    <Icon
                      className='size-2/3'
                      color={global(`personalInfo.socials.${key}.icon.color`)}
                      src={global(`personalInfo.socials.${key}.icon.src`)}
                    />

                    <span className='sr-only'>
                      {global(`personalInfo.socials.${key}.label`)}
                    </span>
                  </Action>
                ))}
              </nav>
            </section>

            <BentoGrid.Root
              className='sm:col-span-2'
              templates={{ default: "'item-0'", sm: "'item-0 item-0 item-1'" }}
            >
              <BentoGrid.Item
                asChild
                idx={0}
              >
                <Card.Root
                  asChild
                  className='max-w-none basis-0 transition-colors hover:bg-active focus-visible:outline-main sm:max-lg:p-xs'
                  color='primary'
                >
                  <Link
                    className='grid items-center gap-2 before:hidden sm:grid-cols-3 sm:items-end'
                    href={`mailto://${global('personalInfo.email')}`}
                  >
                    <div className='sm:col-span-2'>
                      <Card.Title>{t('contact.label')}</Card.Title>

                      <Card.Description className='mt-2 break-all text-xs first-letter:normal-case'>
                        {global('personalInfo.email')}
                      </Card.Description>
                    </div>

                    <div className='aspect-square w-full opacity-20 max-sm:hidden'>
                      <Icon
                        color={t('contact.icon.color')}
                        src={t('contact.icon.src')}
                      />
                    </div>
                  </Link>
                </Card.Root>
              </BentoGrid.Item>

              <BentoGrid.Item
                asChild
                idx={1}
              >
                <Card.Root
                  asChild
                  className='grid max-w-none basis-0 grid-cols-3 items-end gap-2 transition-colors hover:bg-active focus-visible:outline-main max-lg:p-xs max-sm:hidden'
                  color='accent'
                >
                  <Link
                    className='text-start before:hidden'
                    href='#start'
                  >
                    <Card.Title className='col-span-2 lg:text-3xl/none'>
                      {t('backTop.label')}
                    </Card.Title>

                    <div className='aspect-square w-full max-lg:hidden'>
                      <Icon
                        color={t('backTop.icon.color')}
                        src={t('backTop.icon.src')}
                      />
                    </div>
                  </Link>
                </Card.Root>
              </BentoGrid.Item>
            </BentoGrid.Root>
          </div>

          <section className='relative mt-sm flex w-full items-center gap-2 border-t border-transparent px-[5%] py-sm max-sm:flex-col sm:col-span-full'>
            <Text.Small className='grow max-sm:text-center'>
              {t.rich('copyright.label', {
                a: (chunks) => <Link href={t('copyright.href')}>{chunks}</Link>
              })}
            </Text.Small>

            <div className='flex grow items-center justify-center gap-1 max-sm:hidden'>
              <ThemeChanger
                color='inherit'
                items={global.raw('themes')}
                variant='solid'
              />

              <span
                className='text-border'
                role='separator'
              >
                /
              </span>

              <Suspense>
                <LocaleChanger
                  color='inherit'
                  items={global.raw('locales')}
                  variant='solid'
                />
              </Suspense>
            </div>

            <Text.Small className='grow text-center sm:text-end'>
              {t.rich('message.label', {
                a: (chunks) => <Link href={t('message.href')}>{chunks}</Link>
              })}
            </Text.Small>

            <span className='absolute inset-x-[2.5%] -top-px h-px bg-border' />
          </section>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
