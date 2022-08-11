import { render } from '@testing-library/react';
import { Icon } from '..';

const svg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#0A0A09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

describe('<Icon />', () => {
  test('Should render correct icon when pass its name to props', () => {
    const wrapper = render(<Icon name="ArrowDown" />);
    expect(wrapper.container.innerHTML).toBe(svg);

    const name = undefined as never as 'ArrowDown';
    wrapper.rerender(<Icon {...{ name }} />);
    expect(wrapper.container.innerHTML).toBe('<div></div>');
  });
});
