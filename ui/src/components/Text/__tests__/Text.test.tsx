import { Text } from '../';
import { render } from '@testing-library/react';

describe('<Text />', () => {
  test('should render correctly', () => {
    const { container } = render(<Text>Render Text</Text>);

    console.log(container.innerHTML);
  });
});
