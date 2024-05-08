import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

import * as components from '@/components-demo';
import { Text } from '@/components/atoms';
import { Section } from '@/components/molecules';
import { cn, normCompName, normKey } from '@/utils';

const SingleComponentView = ({ slug, className }) => {
  const namespace = `components.${normKey(slug)}`;

  const t = useTranslations(namespace);

  const Component = components[normCompName(slug) + 'Demo'];

  if (!Component) notFound();

  return (
    <Section
      className={cn(
        '-mt-[--header-h] min-h-svh w-9/10 pt-[calc(theme(spacing.lg)+var(--header-h))] lg:w-full',
        className
      )}
    >
      <Text.Title className='max-w-xl text-center text-2xl'>
        {t('title')}
      </Text.Title>

      <Text.Description className='mt-1.5 max-w-xl text-center'>
        {t.rich('description')}
      </Text.Description>

      <Component
        className='mt-md'
        variants={t.raw('variants')}
      />
    </Section>
  );
};

export default SingleComponentView;
