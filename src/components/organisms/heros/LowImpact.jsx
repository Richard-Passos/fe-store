import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Group, Text, Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { cn, objToArray } from '@/utils';

const OrganismsHeroLowImpact = (
  { namespace, className, actions, ...props },
  ref
) => {
  const t = useTranslations(namespace);

  actions = objToArray(actions).map((data) => ({
    ...data,
    label: t(`actions.${data.id}.label`)
  }));

  return (
    <section
      className={cn(
        'flex min-h-svh w-9/10 flex-col items-center justify-center py-xl pb-[--spacing] pt-[calc(var(--header-h)+var(--spacing))] [--spacing:theme(spacing.xl)] sm:max-w-2xl',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        className='text-center'
        order={1}
      >
        {t('title')}
      </Title>

      <Text className='text-center'>{t.rich('description')}</Text>

      <Group
        className='mt-xl'
        gap='sm'
      >
        {actions.map(
          ({ id, label, ...data }) =>
            label && (
              <Action
                key={id}
                {...data}
              >
                {label}
              </Action>
            )
        )}
      </Group>
    </section>
  );
};

export default forwardRef(OrganismsHeroLowImpact);
