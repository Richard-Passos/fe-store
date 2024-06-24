import { ErrorTemplate } from '@/components/templates';

const ViewsError = (props) => {
  return (
    <ErrorTemplate
      namespace='pages.error'
      {...props}
    />
  );
};

export default ViewsError;
