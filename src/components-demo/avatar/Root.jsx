import { Avatar } from '@/components/molecules';

const AvatarDemo = (props) => {
  return (
    <Avatar.Root {...props}>
      <Avatar.Image
        alt='A road winding through a forest near the ocean.'
        height={902}
        priority
        src='/images/demo.png'
        width={600}
      />

      <Avatar.Fallback>RF</Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarDemo;
