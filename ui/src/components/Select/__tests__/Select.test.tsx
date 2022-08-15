import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Select } from '..';
import { SelectTestIds, TextTestIds } from '../../../enums/TestIdLibrary';
import { Option } from '../types';

const renderContent: Option[] = [
  {
    id: '1',
    name: 'Test Value 1',
  },
  {
    id: '2',
    name: 'Test Value 2',
  },
];

const onOptionSelect = jest.fn();

describe('<Select />', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Select {...{ renderContent, onOptionSelect }} />);
  });

  it('Should render component correctly', () => {
    expect(wrapper.container.innerHTML).toBeTruthy();
  });

  it('Should select an option correctly', () => {
    const selectTextNode = wrapper.getAllByTestId(TextTestIds.text);

    const foundTextNode = selectTextNode.find((text) => text.innerHTML === renderContent[0].name);
    expect(foundTextNode?.innerHTML).toBe(renderContent[0].name);

    const selectNode = wrapper.getByTestId(SelectTestIds.select);
    fireEvent.click(selectNode);

    const optionNode = wrapper.getAllByTestId(SelectTestIds.option)[1];
    fireEvent.click(optionNode);

    expect(foundTextNode?.innerHTML).toBe(renderContent[1].name);

    const dropdown = wrapper.queryByTestId(SelectTestIds.dropdown);

    expect(dropdown).toBe(null);
  });
});
