import { fireEvent, render } from '@testing-library/react';
import { Select } from '..';
import { SelectTestIds, TextTestIds } from '../../../../../enums/TestIdLibrary';

describe('<Select />', () => {
  test('Should handle value display and openDropdown correctly', () => {
    const openDropdown = jest.fn();
    const value = 'test value';
    const wrapper = render(<Select {...{ openDropdown, value }} />);

    const textNodes = wrapper.getAllByTestId(TextTestIds.text);
    const selectNode = wrapper.getByTestId(SelectTestIds.select);

    const textNode = textNodes.find((node) => node.innerHTML === value);
    expect(textNode?.innerHTML).toBe(value);

    fireEvent.click(selectNode);

    expect(openDropdown).toBeCalledTimes(1);
  });
});
