import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeView } from '@/components/views';

const HomePage = ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  return <HomeView {...props} />;
};

export default HomePage;
