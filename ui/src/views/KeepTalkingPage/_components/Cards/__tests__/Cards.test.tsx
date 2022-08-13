import { render } from '@testing-library/react';
import { Cards } from '..';
import { KeepTalkingPageIds } from '../../../../../enums/TestIdLibrary';

describe('<Cards', () => {
  test('Should render cards with data correctly', () => {
    const wrapper = render(<Cards />);
    const cards = wrapper.getAllByTestId(KeepTalkingPageIds.card);

    cards.forEach((card) => {
      expect(card.innerHTML).not.toBe('');
    });
  });
});
