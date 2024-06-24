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
        'flex items-center gap-xl py-xl max-sm:flex-col',
        className
      )}
      ref={ref}
      {...props}
    >
      <Center className='relative aspect-square max-sm:w-9/10 sm:sticky sm:top-lg'>
        <Image
          alt={t('image.alt')}
          className='relative z-10 size-full object-cover [mask-image:--shape] [mask-position:center] [mask-repeat:no-repeat] [mask-size:calc(100%-4px)]'
          height={500}
          priority
          src={t('image.src')}
          style={{
            '--shape': `url(${t('image.shape')})`
          }}
          width={500}
        />

        <Icon
          className='absolute text-black *:stroke-black *:stroke-[4px]'
          src={t('image.shape')}
        />
      </Center>

      <Stack
        className='sm:max-w-xl sm:py-xl'
        justify='center'
      >
        <Title
          className='sm:-ml-[calc(theme(spacing.xl)*2)]'
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
