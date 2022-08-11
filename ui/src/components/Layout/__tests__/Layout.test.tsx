import { render } from '@testing-library/react';
import { Layout } from '..';
import { LayoutTestIds } from '../../../enums/TestIdLibrary';

describe('<Layout />', () => {
  test('Should render components correctly', () => {
    const TestInnerHTML = () => <p>test component</p>;
    const renderTestInnerHTML = render(<TestInnerHTML />);

    const TestInnerHTMLEmpty = () => null as never as JSX.Element;
    const renderTestInnerHTMLEmpty = render(<TestInnerHTMLEmpty />);

    const wrapper = render(
      <Layout>
        <TestInnerHTML />
      </Layout>,
    );

    const header = wrapper.getByTestId(LayoutTestIds.header);
    const footer = wrapper.getByTestId(LayoutTestIds.footer);
    const main = wrapper.getByTestId(LayoutTestIds.main);

    expect(renderTestInnerHTML.container).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(main).toBeInTheDocument();

    wrapper.rerender(
      <Layout>
        <TestInnerHTMLEmpty />
      </Layout>,
    );

    const emptyMain = wrapper.getByTestId(LayoutTestIds.main);
    expect(emptyMain.innerHTML).toBe('');
  });
});
