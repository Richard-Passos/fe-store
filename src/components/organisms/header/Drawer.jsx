import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Link, Stack, Title } from '@/components/atoms';
import { BurgerIcon } from '@/components/atoms/icon/icons';
import { Drawer } from '@/components/molecules';
import { cn, translationKeys } from '@/utils';

import Action from './Action';

const OrganismsHeaderDrawer = (
  { namespace, className, triggerProps = {}, contentProps = {}, ...props },
  ref
) => {
  const t = useTranslations(namespace);

  return (
    <Drawer.Root
      className={cn('*:left-0 md:hidden', className)}
      ref={ref}
      {...props}
      trigger={
        <Drawer.Trigger
          aria-label={t('trigger.label')}
          asChild
          {...triggerProps}
          className={cn('md:hidden', triggerProps.className)}
        >
          <Action
            isIconOnly
            size='lg'
          >
            <BurgerIcon className='size-2/3' />
          </Action>
        </Drawer.Trigger>
      }
    >
      <Drawer.Content
        {...contentProps}
        closeProps={{
          'aria-label': t('close.label'),
          ...contentProps.closeProps
        }}
        overlayProps={{
          className: cn('md:hidden', contentProps.overlayProps?.className),
          ...contentProps.overlayProps
        }}
        title={t('title')}
      >
        <Stack
          className='my-xl'
          component='nav'
          gap='xs'
        >
          {translationKeys(t, 'primaryLinks').map((key) => (
            <Title
              className='text-5xl text-current hover:text-primary-filled'
              component={Link}
              href={t(`primaryLinks.${key}.href`)}
              key={key}
              variant='h2'
            >
              {t(`primaryLinks.${key}.label`)}
            </Title>
          ))}
        </Stack>

        <Stack
          className='mt-xl pt-xl'
          component='nav'
          gap='md'
        >
          {translationKeys(t, 'secondaryLinks').map((key) => (
            <Link
              className='text-current hover:text-primary-filled'
              href={t(`secondaryLinks.${key}.href`)}
              key={key}
            >
              {t(`secondaryLinks.${key}.label`)}
            </Link>
          ))}
        </Stack>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(OrganismsHeaderDrawer);
