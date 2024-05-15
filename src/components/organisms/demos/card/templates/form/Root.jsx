import { useTranslations } from 'next-intl';

import { Input, Textarea } from '@/components/atoms';
import { Card, Form } from '@/components/molecules';
import { normKey, renderComp, translationKeys } from '@/utils';

import ClientForm from './Client';
import Select from './Select';

const CONTROLS = {
  input: Input,
  textarea: Textarea,
  select: Select
};

const DemosCardOrganismTemplatesForm = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  const fieldKeys = translationKeys(t, 'fields');

  const { configs, defaultValues } = {
    ...fieldKeys.reduce(
      (obj, key) => ({
        configs: {
          ...obj.configs,
          [key]: t.raw(`fields.${key}.config`)
        },
        defaultValues: {
          ...obj.defaultValues,
          [key]: t.raw(`fields.${key}.defaultValue`)
        }
      }),
      { configs: {}, defaultValues: {} }
    )
  };

  return (
    <Card.Root {...props}>
      <ClientForm
        configs={configs}
        defaultValues={defaultValues}
        okToast={{
          title: t('okToast.title'),
          description: t('okToast.description'),
          icon: {
            color: t('okToast.icon.color'),
            src: t('okToast.icon.src')
          },
          close: {
            label: t('okToast.close.label'),
            color: t('okToast.close.color'),
            variant: t('okToast.close.variant'),
            icon: {
              color: t('okToast.close.icon.color'),
              src: t('okToast.close.icon.src')
            }
          },
          color: t('okToast.color'),
          variant: t('okToast.variant')
        }}
      >
        <Card.Header>
          <Card.Title>{t('title')}</Card.Title>

          <Card.Description className='mt-1.5'>
            {t('description')}
          </Card.Description>
        </Card.Header>

        <Card.Content className='mt-6 gap-4'>
          {fieldKeys.map((key) => {
            const field = `fields.${key}`;

            const control = normKey(t(`${field}.control`));

            const Control = CONTROLS[control];

            return (
              Control && (
                <Form.Field
                  key={key}
                  name={key}
                >
                  <Form.Label className='pb-2'>
                    {t(`${field}.label`)}
                    {
                      (renderComp(
                        <span className='text-xs lowercase text-content/75'>
                          &nbsp;(${t(`${field}.optionalText`)})
                        </span>
                      ),
                      [t(`${field}.optionalText`)])
                    }
                  </Form.Label>

                  {control !== 'select' ? (
                    <Form.Control>
                      <Control
                        placeholder={t(`${field}.placeholder`)}
                        type={t(`${field}.type`)}
                      />
                    </Form.Control>
                  ) : (
                    <Control
                      icon={{
                        color: t(`${field}.icon.color`),
                        animation: t(`${field}.icon.animation`),
                        src: t(`${field}.icon.src`)
                      }}
                      items={translationKeys(t, `${field}.items`).map(
                        (key) => ({
                          value: key,
                          label: t(`${field}.items.${key}.label`),
                          icon: {
                            color: t(`${field}.items.${key}.icon.color`),
                            src: t(`${field}.items.${key}.icon.src`)
                          }
                        })
                      )}
                      placeholder={t(`${field}.placeholder`)}
                    />
                  )}

                  <Form.Description className='mt-2'>
                    {t(`${field}.description`)}
                  </Form.Description>

                  <Form.Message className='mt-2' />
                </Form.Field>
              )
            );
          })}
        </Card.Content>

        <Card.Actions className='mt-6'>
          <Form.Reset
            color={t('cancel.color')}
            size={t('cancel.size')}
            values={defaultValues}
            variant={t('cancel.variant')}
          >
            {t('cancel.label')}
          </Form.Reset>

          <Form.Submit
            color={t('confirm.color')}
            size={t('confirm.size')}
            variant={t('confirm.variant')}
          >
            {t('confirm.label')}
          </Form.Submit>
        </Card.Actions>
      </ClientForm>
    </Card.Root>
  );
};

export default DemosCardOrganismTemplatesForm;
