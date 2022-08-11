import { render } from '@testing-library/react';
import { Dropdown } from '..';
import { SelectTestIds } from '../../../../../enums/TestIdLibrary';
import { Option } from '../../../types';

const renderContent: Option[] = [
  {
    id: '1',
    value: 'Test Value 1',
  },
  {
    id: '2',
    value: 'Test Value 2',
  },
];

const renderEmptyContent = undefined as never as Option[];

describe('<Dropdown />', () => {
  it('Should handle openning and closing correctly', () => {
    const wrapper = render(<Dropdown {...{ renderContent }} />);
    expect(wrapper.container.innerHTML).toBeFalsy();

    wrapper.rerender(
      <Dropdown renderContent={renderEmptyContent} visible={true} />,
    );

    const optionNodeEmpty = wrapper.queryAllByTestId(SelectTestIds.option);

    expect(wrapper.container.innerHTML).toBeTruthy();
    expect(optionNodeEmpty).toEqual([]);

    wrapper.rerender(<Dropdown visible={true} {...{ renderContent }} />);

    const optionNode = wrapper.queryAllByTestId(SelectTestIds.option);
    optionNode.forEach((option) => expect(option).toBeInTheDocument());
  });
});
