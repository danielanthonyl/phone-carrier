import { Footer, Header } from './_components';
import { ILayoutProps } from './types';
import classes from './styles.module.scss';
import { LayoutTestIds } from '../../enums/TestIdLibrary';

export const Layout = ({ children }: ILayoutProps) => (
  <div className={classes.app}>
    <Header />
    <main data-testid={LayoutTestIds.main} className={classes.main}>
      {children}
    </main>
    <Footer email="contato@telzir.com.br" phone="+55 19 0000-0000" />
  </div>
);
