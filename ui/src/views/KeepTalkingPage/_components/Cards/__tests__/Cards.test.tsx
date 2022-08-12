import { render } from '@testing-library/react';
import { Cards } from '..';
import { KeepTalkingPageIds } from '../../../../../enums/TestIdLibrary';
import {
  keepTalkingData,
  keepTalkingDataEmpty,
} from '../__mocks__/keepTalkingData';

describe('<Cards', () => {
  test('Should render cards with data correctly', () => {
    const wrapper = render(<Cards {...{ keepTalkingData }} />);
    const cards = wrapper.getAllByTestId(KeepTalkingPageIds.card);

    cards.forEach((card) => {
      expect(card.innerHTML).not.toBe('');
    });

    wrapper.rerender(<Cards keepTalkingData={keepTalkingDataEmpty} />);
    const cardsEmpty = wrapper.queryAllByTestId(KeepTalkingPageIds.card);

    expect(cardsEmpty.length).toBe(0);
  });
});
