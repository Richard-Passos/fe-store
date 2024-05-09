import { useTranslations } from 'next-intl';

import { Button } from '@/components/atoms';
import colorVariants from '@/components/colorVariants';
import { Action, AlertDialog } from '@/components/molecules';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ALERT_DIALOG = {
  color: Object.keys(colorVariants)
};

const DemosAlertDialogOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ALERT_DIALOG).map((variants, i) => (
    <Demos
      key={i}
      variants={variants}
      {...props}
    >
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Action
            namespace={`${namespace}.action`}
            {...variants}
          />
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay {...variants} />

          <AlertDialog.Content {...variants}>
            <AlertDialog.Header>
              <AlertDialog.Title>{t('title')}</AlertDialog.Title>

              <AlertDialog.Description className='mt-2'>
                {t('description')}
              </AlertDialog.Description>
            </AlertDialog.Header>

            <AlertDialog.Actions className='mt-6'>
              <AlertDialog.Cancel asChild>
                <Button
                  className='border-content/25 bg-main text-content hover:bg-active'
                  color='inherit'
                  size={t('cancel.size')}
                >
                  {t('cancel.label')}
                </Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button
                  className='border-transparent bg-primary text-primary-content hover:bg-primary-active'
                  color='inherit'
                  size={t('confirm.size')}
                >
                  {t('confirm.label')}
                </Button>
              </AlertDialog.Action>
            </AlertDialog.Actions>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Demos>
  ));
};

export default DemosAlertDialogOrganism;
