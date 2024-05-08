import { useTranslations } from 'next-intl';

import { Icon, Text } from '@/components/atoms';
import { Action, Section } from '@/components/molecules';
import * as structures from '@/components/structures';
import { cn, normCompName } from '@/utils';

const HeroTemplate = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Block = structures[normCompName(t('block.slug'))];

  return (
    <Section
      className={cn(
        '-mt-[--header-h] grid min-h-svh gap-md pt-[calc(theme(spacing.lg)+var(--header-h))] sm:grid-cols-2',
        className
      )}
      namespace={namespace}
      size='lg'
      {...props}
    >
      <section className='flex flex-col'>
        <Text.Title className='max-w-xl text-5xl/none tracking-tight'>
          {t('title')}
        </Text.Title>

        <Text.Description className='mt-xs max-w-xl leading-relaxed'>
          {t.rich('description')}
        </Text.Description>

        <Action
          className='mt-md w-fit'
          color={t('action.color')}
          href={t('action.href')}
          size={t('action.size')}
          type={t('action.type')}
        >
          {t('action.label')}
        </Action>

        <Text.Description className='mt-sm flex items-center text-xs'>
          <span className='size-4'>
            <Icon src={t('scroll.icon')} />
          </span>
          &nbsp;
          <span className='first-letter:uppercase'>
            {t('scroll.description')}
          </span>
        </Text.Description>
      </section>

      {Block && (
        <Block
          className='grow'
          namespace={`${namespace}.block`}
        />
      )}
    </Section>
  );
};

export default HeroTemplate;
