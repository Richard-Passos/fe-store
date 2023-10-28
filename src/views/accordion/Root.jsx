import { ChevronDown } from 'lucide-react';

import { Accordion, Text } from '@/components/ui';
import { cn } from '@/utils';

const ACCORDION_VARIANTS = [
  { type: 'single', collapsible: true },
  { type: 'single', collapsible: false },
  { type: 'multiple' },
];

const AccordionView = ({ className, ...props }) => {
  return (
    <ul
      className={cn('flex w-full flex-wrap justify-center gap-12', className)}
      {...props}
    >
      {ACCORDION_VARIANTS.map((variants) => (
        <li
          className='h-fit w-full max-w-md space-y-6 rounded-md bg-muted p-5 shadow-md'
          key={getKeyValue(variants).join()}
        >
          <Title variants={variants} />

          <Accordion {...variants}>
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
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </li>
      ))}
    </ul>
  );
};

const getKeyValue = (obj) => Object.entries(obj);

const Title = ({ variants, className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-base font-medium', className)}
      {...props}
    >
      {getKeyValue(variants).map(([key, value], i, arr) => (
        <>
          <span className='first:capitalize'>{key}</span>:{' '}
          <span className='text-muted-content'>{value.toString()}</span>
          {i < arr.length - 1 && ' - '}
        </>
      ))}
    </Text.Title>
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

export default AccordionView;
