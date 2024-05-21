import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

import { Heading, Text } from '@/components/atoms';
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
      <Heading
        className='text-center sm:max-w-2xl'
        variant='h1'
      >
        {t('title')}
      </Heading>

      <Text
        className='mt-xs text-center sm:max-w-2xl'
        variant='p'
      >
        {t.rich('description')}
      </Text>

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
