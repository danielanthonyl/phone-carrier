import { Footer, Navigation } from './_components';
import { ILayoutProps } from './types';

export const Layout = ({ children }: ILayoutProps) => (
  <main>
    <Navigation />
    {children}
    <Footer email="contato@telzir.com.br" phone="+55 19 0000-0000" />
  </main>
);
