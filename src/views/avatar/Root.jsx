import { Avatar } from '@/components/ui';

const AvatarView = ({ className, ...props }) => {
  return (
    <Avatar {...props}>
      <Avatar.Image
        alt='A road winding through a forest near the ocean.'
        height={902}
        src='/images/demo.png'
        width={600}
      />

      <Avatar.Fallback>RF</Avatar.Fallback>
    </Avatar>
  );
};

export default AvatarView;
