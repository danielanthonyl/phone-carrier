import { Text } from '../';
import { render, RenderResult } from '@testing-library/react';

describe('<Text />', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Text>Render Text</Text>);
  });
  test('Should render correctly', () => {
    expect(wrapper.container.innerHTML).toBeTruthy();
  });
});
