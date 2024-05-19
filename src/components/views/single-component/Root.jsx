import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

import { Text } from '@/components/atoms';
import { Section } from '@/components/molecules';
import * as structures from '@/components/structures';
import { cn, normCompName, normKey } from '@/utils';

const SingleComponentView = ({ slug, className }) => {
  const namespace = `components.${normKey(slug)}`;

  const t = useTranslations(namespace);

  const Block = structures[normCompName(t('block.slug'))];

  if (!t('title')) notFound();

  return (
    <Section
      className={cn(
        '-mt-[--header-h] min-h-svh w-9/10 pt-[calc(var(--py)+var(--header-h))]',
        className
      )}
      size='xl'
    >
      <Text.Title className='text-center sm:max-w-2xl'>{t('title')}</Text.Title>

      <Text.Description className='mt-xs text-center sm:max-w-2xl'>
        {t.rich('description')}
      </Text.Description>

      {Block && (
        <Block
          className='mt-lg first:mt-0'
          namespace={`${namespace}.block`}
        />
      )}
    </Section>
  );
};

export default SingleComponentView;
