import { fireEvent, render } from '@testing-library/react';
import { Option } from '..';
import { SelectTestIds, TextTestIds } from '../../../../../enums/TestIdLibrary';
import { Option as OptionType } from '../../../types';

const option: OptionType = {
  id: '1',
  name: 'test value',
};

const emptyOption = {
  id: undefined,
  value: undefined,
} as unknown as OptionType;

describe('<Option />', () => {
  it('Should handle value display and callback correctly', () => {
    const onOptionSelect = jest.fn();
    const wrapper = render(<Option {...emptyOption} {...{ onOptionSelect }} />);
    const optionUlNode = wrapper.getByTestId(SelectTestIds.option);
    const emptyTextNode = wrapper.getByTestId(TextTestIds.text);

    fireEvent.click(optionUlNode);

    expect(emptyTextNode.innerHTML).toBeFalsy();
    expect(onOptionSelect).toBeCalledWith(emptyOption);

    wrapper.rerender(<Option {...option} {...{ onOptionSelect }} />);

    const textNode = wrapper.getByTestId(TextTestIds.text);

    fireEvent.click(optionUlNode);

    expect(onOptionSelect).toBeCalledWith(option);
    expect(textNode.innerHTML).toBe(option.name);
  });
});
