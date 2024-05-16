import { useFormatter, useTranslations } from 'next-intl';

import { Icon, Switch, Text } from '@/components/atoms';
import { Action, Card } from '@/components/molecules';
import { translationKeys } from '@/utils';

const DemosCardOrganismTemplatesNotifications = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root {...props}>
      <Card.Header>
        <Card.Title>{t('title')}</Card.Title>

        <Card.Description className='mt-1.5'>
          {t('description', {
            count: translationKeys(t, 'block.items').length
          })}
        </Card.Description>
      </Card.Header>

      <DemosCardOrganismTemplatesNotificationsBlock
        className='mt-6'
        namespace={`${namespace}.block`}
      />

      <Card.Actions className='mt-6'>
        <Action
          className='w-full'
          color={t('action.color')}
          href={t('action.href')}
          size={t('action.size')}
          variant={t('action.variant')}
        >
          {t('action.label')}
        </Action>
      </Card.Actions>
    </Card.Root>
  );
};

const DemosCardOrganismTemplatesNotificationsBlock = ({
  namespace,
  ...props
}) => {
  const t = useTranslations(namespace),
    format = useFormatter();

  return (
    <Card.Content {...props}>
      <section className='flex items-center gap-4 rounded-sm border bg-main p-4'>
        <div className='size-6'>
          <Icon
            color={t('icon.color')}
            src={t('icon.src')}
          />
        </div>

        <div className='flex-1'>
          <Text.Subtitle
            asChild
            className='text-sm/none'
          >
            <h4>{t('title')}</h4>
          </Text.Subtitle>

          <Card.Description className='mt-1.5'>
            {t('description')}
          </Card.Description>
        </div>

        <Switch.Root>
          <Switch.Thumb />
        </Switch.Root>
      </section>

      <ul className='mt-4 flex flex-col gap-3'>
        {translationKeys(t, 'items').map((key) => (
          <li
            className='flex gap-4 px-4'
            key={key}
          >
            <span className='size-2 translate-y-1/2 rounded-full bg-primary' />

            <section>
              <Text.Subtitle
                asChild
                className='text-xs/none'
              >
                <h5> {t(`items.${key}.title`)}</h5>
              </Text.Subtitle>

              <Card.Description className='mt-1 text-xs'>
                {format.relativeTime(t(`items.${key}.createdAt`))}
              </Card.Description>
            </section>
          </li>
        ))}
      </ul>
    </Card.Content>
  );
};

export default DemosCardOrganismTemplatesNotifications;
