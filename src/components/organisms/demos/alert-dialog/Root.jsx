import { useTranslations } from 'next-intl';

import { Button } from '@/components/atoms';
import colors from '@/components/colors';
import { Action, AlertDialog } from '@/components/molecules';
import { cn } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ALERT_DIALOG = {
  color: Object.keys(colors)
};

const DemosAlertDialogOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return variantsComb(ALERT_DIALOG).map((variants, i) => (
    <Demos
      className={cn('w-fit', className)}
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
                <Action namespace={`${namespace}.cancel`} />
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Action
                  className='bg-primary text-primary-content hover:bg-primary-active'
                  namespace={`${namespace}.confirm`}
                />
              </AlertDialog.Action>
            </AlertDialog.Actions>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Demos>
  ));
};

export default DemosAlertDialogOrganism;
