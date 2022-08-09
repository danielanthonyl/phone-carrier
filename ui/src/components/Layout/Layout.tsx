import { ILayoutProps } from './types';

export const Layout = ({ children }: ILayoutProps) => {
  console.log('');

  return (
    <main>
      <nav></nav>
      {children}
    </main>
  );
  <footer></footer>;
};
