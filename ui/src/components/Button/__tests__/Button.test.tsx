import { render } from '@testing-library/react';
import { Button } from '..';

describe('<Button />', () => {
  test('Should render button with variants and title', () => {
    const wrapper = render(<Button title="Test title" variant="outline" />);
    expect(wrapper.container.innerHTML).toBeTruthy();

    wrapper.rerender(<Button title="Test Title" variant="default" />);
    expect(wrapper.container.innerHTML).toBeTruthy();
  });
});
