import { ListComponent } from '@/components';
import { Input } from '@/components/ui';

const INPUT_VARIANTS = [
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
    <ListComponent {...props}>
      {INPUT_VARIANTS.map(({ placeholder, ...variants }) => (
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
    </ListComponent>
  );
};

export default InputDemo;
