import { ChevronDown } from 'lucide-react';

import { Accordion } from '@/components/ui';
import { cn } from '@/utils';

const DialogView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full max-w-bounds items-center justify-center',
        className,
      )}
      {...props}
    >
      <Accordion className='max-w-screen-md'>
        <Accordion.Item value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>

          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>

          <Accordion.Content>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-3'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>

          <Accordion.Content>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
};

const AccordionTrigger = (props) => {
  return (
    <Accordion.Header {...props}>
      <Accordion.Trigger>
        Is it animated?
        <ChevronDown
          aria-hidden
          className='h-4 w-4 transition-transform duration-300 group-data-open:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export default DialogView;
