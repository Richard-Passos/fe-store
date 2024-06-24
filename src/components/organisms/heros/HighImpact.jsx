import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Badge, Button, Icon, Image } from '@/components/atoms';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/atoms/icon/icons';
import { Action, Carousel, PathText } from '@/components/molecules';
import { cn, translationKeys } from '@/utils';

const OrganismsHeroHighImpact = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace);

  return (
    <section
      className={cn('relative isolate flex w-full flex-col', className)}
      ref={ref}
      {...props}
    >
      <Carousel.Root
        className='relative pb-xl sm:pt-[--header-h]'
        options={{
          type: 'loop',
          drag: 'free',
          snap: true,
          flickPower: 150,
          gap: 'var(--spacing-lg)'
        }}
      >
        <Carousel.Track>
          {translationKeys(t, 'items').map((key, i) => (
            <Carousel.Item
              className='group relative flex flex-col items-center justify-center'
              key={key}
            >
              <Image
                alt={t(`items.${key}.image.alt`)}
                className='relative z-10 [mask-image:--shape] [mask-position:center] [mask-repeat:no-repeat] [mask-size:calc(100%-4px)] max-sm:h-[75vw]'
                height={t(`items.${key}.image.height`)}
                priority={i === 0}
                src={t(`items.${key}.image.src`)}
                style={{
                  '--shape': `url(${t(`items.${key}.image.shape`)})`
                }}
                width={t(`items.${key}.image.width`)}
              />

              <Icon
                className='absolute text-black *:stroke-black *:stroke-[4px]'
                src={t(`items.${key}.image.shape`)}
              />

              <Badge
                className='absolute z-10 scale-95 opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100'
                size='xl'
              >
                {t(`items.${key}.label`)}
              </Badge>
            </Carousel.Item>
          ))}
        </Carousel.Track>

        <Carousel.Actions className='pointer-events-none absolute inset-0 top-[--header-h]'>
          <Carousel.Action
            asChild
            type='prev'
          >
            <Button
              className='pointer-events-auto absolute inset-y-2 left-0 h-auto rounded-none opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100'
              color='black'
              variant='light'
            >
              <ArrowLeftIcon />
            </Button>
          </Carousel.Action>

          <Carousel.Action
            asChild
            type='next'
          >
            <Button
              className='pointer-events-auto absolute inset-y-2 right-0 h-auto rounded-none opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100'
              color='black'
              variant='light'
            >
              <ArrowRightIcon />
            </Button>
          </Carousel.Action>
        </Carousel.Actions>

        <span className='absolute inset-y-0 -z-50 w-screen bg-primary-filled'></span>
      </Carousel.Root>

      <div className='w relative h-[calc(var(--ai-size-xxl)/2)] w-full [--ai-size-xxl:clamp(theme(spacing.32),3.125rem+14vw,theme(spacing.44))]'>
        <span className='absolute left-1/2 top-0 h-1 w-screen -translate-x-1/2 -translate-y-1/2 bg-black' />

        <Action
          aria-label={t('link.label')}
          className='group absolute right-[7.5%] top-0 -translate-y-1/2 rounded-full border-black'
          href={t('link.href')}
          isIconOnly
          size='xxl'
          variant='default'
        >
          <Icon
            className='relative z-10 size-1/2 text-primary-filled *:stroke-black *:stroke-1 dark:*:stroke-0'
            src={t('link.icon')}
          />

          <PathText
            className='absolute size-9/10 animate-[spin_10s_linear_infinite_var(--animation-state,running)] font-display font-bold group-hover:[--animation-state:paused]'
            path='
              M 12 2 
              a 10 10 0 1 1 0 20 
              a 10 10 0 1 1 0 -20
            '
            text={t('link.label')}
            textProps={{ textLength: 55, fontSize: 2.5 }}
            viewBox='0 0 24 24'
          />
        </Action>
      </div>
    </section>
  );
};

export default forwardRef(OrganismsHeroHighImpact);
