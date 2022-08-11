import { Footer, Header } from './_components';
import { ILayoutProps } from './types';
import classes from './styles.module.scss';

export const Layout = ({ children }: ILayoutProps) => (
  <div>
    <Header />
    <main className={classes.main}>{children}</main>
    <Footer email="contato@telzir.com.br" phone="+55 19 0000-0000" />
  </div>
);
