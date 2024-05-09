import { Tabs } from '@/components/molecules';
import { cn } from '@/utils';

import Forms from './forms';

const TabsDemo = ({ className, ...props }) => {
  return (
    <Tabs.Root
      className={cn('w-full max-w-sm', className)}
      defaultValue='account'
      {...props}
    >
      <Tabs.List>
        <Tabs.Trigger value='account'>Account</Tabs.Trigger>

        <Tabs.Trigger value='password'>Password</Tabs.Trigger>
      </Tabs.List>

      <Forms.Account />

      <Forms.Password />
    </Tabs.Root>
  );
};

export default TabsDemo;
