import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const metadata = {
  title: 'Template — layout',
  description: 'A default template for my projects.',
};

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={cn(
          'relative mx-auto min-h-screen bg-main font-app text-content',
          font.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
export { metadata };
