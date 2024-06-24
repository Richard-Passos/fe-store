import { ErrorTemplate } from '@/components/templates';

const ViewsNotFound = (props) => {
  return (
    <ErrorTemplate
      namespace='pages.notFound'
      {...props}
    />
  );
};

export default ViewsNotFound;
