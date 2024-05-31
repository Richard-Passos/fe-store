import { HomeTemplate } from '@/components/templates';

const ViewsHome = (props) => {
  return (
    <HomeTemplate
      namespace='pages.home'
      {...props}
    />
  );
};

export default ViewsHome;
