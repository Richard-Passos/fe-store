import { Input } from '@/components/atoms';
import { ListComponent } from '@/components/molecules';

const INPUT = [
  { variant: 'color' },
  { variant: 'email', placeholder: 'johndoe@example.com' },
  { variant: 'file' },
  { variant: 'hidden' },
  { variant: 'number', placeholder: '100' },
  { variant: 'password', placeholder: '******' },
  { variant: 'search', placeholder: 'Type to search...' },
  { variant: 'tel', placeholder: 'xx xxxx-xxxx' },
  { variant: 'text', placeholder: 'John Doe' },
  { variant: 'time' },
  { variant: 'url', placeholder: 'google.com' }
];

const InputDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      {INPUT.map(({ placeholder, ...variants }) => (
        <ListComponent.Item
          className='max-w-xs'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Input
            placeholder={placeholder}
            {...variants}
          />
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default InputDemo;
