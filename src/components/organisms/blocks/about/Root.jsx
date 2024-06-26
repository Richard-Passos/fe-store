import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Center, Group, Icon, Image, Stack, Title } from '@/components/atoms';
import { Action, Tooltip } from '@/components/molecules';
import { cn, translationKeys } from '@/utils';

const OrganismsBlocksAbout = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace),
    gt = useTranslations();

  const socials = translationKeys(gt, 'personal.socials');

  return (
    <section
      className={cn(
        'flex w-9/10 max-w-screen-lg items-center gap-xl py-xl max-md:flex-col',
        className
      )}
      ref={ref}
      {...props}
    >
      <Center className='relative aspect-square w-full flex-1 p-1 md:sticky md:top-lg'>
        <Image
          alt={t('image.alt')}
          className='relative z-10 object-cover [mask-image:--shape] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%]'
          fill
          priority
          src={t('image.src')}
          style={{
            '--shape': `url(${t('image.shape')})`
          }}
        />

        <Icon
          className='absolute text-black *:stroke-black *:stroke-[4px]'
          src={t('image.shape')}
        />
      </Center>

      <Stack
        className='flex-1 sm:max-w-xl md:py-xl'
        justify='center'
      >
        <Title
          className='md:-ml-[calc(theme(spacing.xl)*2)]'
          order={1}
        >
          {t.rich('title')}
        </Title>

        <Stack className='sm:px-xl'>{t.rich('description')}</Stack>

        <Tooltip.Group>
          <Group
            className='ml-auto mt-lg w-fit rounded bg-black p-1'
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
      </Stack>
    </section>
  );
};

export default forwardRef(OrganismsBlocksAbout);
