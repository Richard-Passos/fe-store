import { HighImpactHero } from '@/components/organisms/heros';

const TemplatesHome = ({ namespace }) => {
  return (
    <>
      <HighImpactHero namespace={`${namespace}.hero`} />
    </>
  );
};

export default TemplatesHome;
