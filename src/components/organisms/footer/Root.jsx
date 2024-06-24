import { Divider } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import {
  Center,
  Group,
  Icon,
  Marquee,
  Stack,
  Text,
  Title
} from '@/components/atoms';
import { Action, Grid, NavLink, Tooltip } from '@/components/molecules';
import Logo from '@/components/organisms/logo';
import { cn, translationKeys } from '@/utils';

const OrganismsFooter = ({ className, ...props }, ref) => {
  const namespace = 'footer';

  const t = useTranslations(namespace),
    gt = useTranslations('');

  const socials = translationKeys(gt, 'personal.socials'),
    nav = translationKeys(t, 'nav');

  return (
    <Grid.Root
      className={cn(
        'flex w-full max-w-bounds items-center justify-center bg-primary-filled py-lg text-black *:w-full',
        className
      )}
      component='footer'
      ref={ref}
      {...props}
    >
      <Grid.Col
        className='pl-xl max-sm:px-md'
        component={Stack}
        gap='xs'
        offset={{ base: 0, md: 1 }}
        span={{ base: 12, md: 3 }}
      >
        <Logo
          className='w-fit -translate-x-[--button-padding-x] text-inherit'
          variant='secondary'
        />

        <Text>{t('description')}</Text>

        <Tooltip.Group>
          <Group
            className='mt-lg w-fit rounded bg-black p-1'
            gap='0'
          >
            {socials.map((key) => (
              <Tooltip.Root
                key={key}
                label={gt(`personal.socials.${key}.label`)}
              >
                <Action
                  className='size-8'
                  href={gt(`personal.socials.${key}.href`)}
                  isIconOnly
                  variant='subtle'
                >
                  <Icon
                    className='size-2/3'
                    src={gt(`personal.socials.${key}.icon`)}
                  />
                </Action>
              </Tooltip.Root>
            ))}
          </Group>
        </Tooltip.Group>
      </Grid.Col>

      <Grid.Col
        className='flex justify-center max-sm:hidden'
        span={1}
      >
        <Divider
          color='black'
          orientation={{ base: 'horizontal', md: 'vertical' }}
        />
      </Grid.Col>

      <Grid.Col
        align='start'
        className='pr-xl max-sm:mt-lg max-sm:px-md'
        component={Group}
        gap='xl'
        justify='space-between'
        span={{ base: 12, md: 6 }}
      >
        {nav.map((key) => {
          const namespace = `nav.${key}`;

          const items = translationKeys(t, `nav.${key}.items`);

          return (
            <Stack
              className='first:left-0 last:right-0 sm:mx-xl'
              gap='xs'
              key={key}
            >
              <Title order={4}>{t(`${namespace}.title`)}</Title>

              <nav>
                {items.map((key) => (
                  <NavLink
                    className='rounded text-inherit transition-none hover:bg-black hover:text-white'
                    href={t(`${namespace}.items.${key}.href`)}
                    key={key}
                    label={t(`${namespace}.items.${key}.label`)}
                  />
                ))}
              </nav>
            </Stack>
          );
        })}
      </Grid.Col>

      <Grid.Col
        autoFill
        className='mt-xl text-xl'
        component={Marquee}
        span={12}
      >
        <Center className='gap-[.25em]'>&nbsp;{t.rich('loop')}</Center>
      </Grid.Col>
    </Grid.Root>
  );
};

export default forwardRef(OrganismsFooter);
