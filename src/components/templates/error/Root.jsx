import { LowImpactHero } from '@/components/organisms/heros';

const TemplatesError = ({ namespace, reset }) => {
  return (
    <LowImpactHero
      actions={{
        tryAgain: { variant: 'default', onClick: reset },
        backHome: { href: '/' }
      }}
      namespace={namespace}
    />
  );
};

export default TemplatesError;
