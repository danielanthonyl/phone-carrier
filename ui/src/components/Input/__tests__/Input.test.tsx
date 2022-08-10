import { useState } from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { Input } from '..';
import { InputTestIds } from '../../../enums/TestIdLibrary';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<Input />', () => {
  let wrapper: RenderResult;
  const setState = jest.fn();

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation((init: string) => [
      init,
      setState,
    ]);
    wrapper = render(<Input />);
  });

  test('Should render correctly', () => {
    expect(wrapper.container.innerHTML).toBeTruthy();
  });

  test('Should apply inputLabelAnimateUp class when focus', () => {
    const inputNode = wrapper.getByTestId(InputTestIds.input);

    fireEvent.focus(inputNode);

    expect(setState).toHaveBeenCalledWith('inputLabelAnimateUp');
  });

  test('Should apply className for respectively trigger events correctly', () => {
    const inputNode = wrapper.getByTestId(InputTestIds.input);

    fireEvent.change(inputNode, { target: { value: 'Test Text' } });

    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenCalledWith('inputLabelAnimateUp');

    fireEvent.blur(inputNode);

    expect(setState).toHaveBeenCalledWith('inputLabelAnimateDown');
  });
});
