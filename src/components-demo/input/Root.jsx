import { ListComponent } from '@/components/molecules';
import { Input } from '@/components/atoms';

const INPUT = [
  { type: 'color' },
  { type: 'email', placeholder: 'johndoe@example.com' },
  { type: 'file' },
  { type: 'hidden' },
  { type: 'number', placeholder: '100' },
  { type: 'password', placeholder: '******' },
  { type: 'search', placeholder: 'Type to search...' },
  { type: 'tel', placeholder: 'xx xxxx-xxxx' },
  { type: 'text', placeholder: 'John Doe' },
  { type: 'time' },
  { type: 'url', placeholder: 'google.com' },
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
