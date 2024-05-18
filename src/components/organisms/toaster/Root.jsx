'use client';

import { Slot } from '@radix-ui/react-slot';

import { Icon } from '@/components/atoms';
import { Toast } from '@/components/molecules';
import { useToast } from '@/hooks';
import { renderComp } from '@/utils';

const ToasterOrganism = () => {
  const { toasts } = useToast();

  return toasts.map(
    ({ id, icon, title, description, action, close, ...props }) => (
      <Toast.Root
        key={id}
        {...props}
      >
        {renderComp(
          <div className='mb-auto mr-xs size-6'>
            <Icon
              aria-hidden
              {...icon}
            />
          </div>,
          [icon?.src]
        )}

        {renderComp(
          <Toast.Header>
            <Toast.Title>{title}</Toast.Title>

            <Toast.Description>{description}</Toast.Description>
          </Toast.Header>,
          [title, description]
        )}

        {renderComp(
          <Toast.Description className='text-opacity-100'>
            {description}
          </Toast.Description>,
          [!title, description]
        )}

        {renderComp(<Slot className='ml-sm'>{action}</Slot>, [action])}

        <Toast.Close
          aria-label={close?.label}
          color={close.color}
          variant={close.variant}
        >
          <Icon
            className='w-2/3'
            {...close?.icon}
          />
        </Toast.Close>

        <Toast.Timerbar />
      </Toast.Root>
    )
  );
};

export default ToasterOrganism;
