import { normalizeCompName } from '@/utils';
import * as Views from '@/views';

const HomePage = ({ params: { component } }) => {
  const View = Views[normalizeCompName(component)] ?? Views.Home;

  return <View />;
};

export default HomePage;
