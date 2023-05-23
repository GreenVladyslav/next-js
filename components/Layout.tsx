import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type loyaoutProps = {
  children: ReactNode;
};

const Layout: FC<loyaoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
