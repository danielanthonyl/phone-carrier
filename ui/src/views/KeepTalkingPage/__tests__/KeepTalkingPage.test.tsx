import { render } from '@testing-library/react';
import { KeepTalkingPage } from '..';
import { KeepTalkingPageIds } from '../../../enums/TestIdLibrary';

describe('<KeepTalkingPage />', () => {
  test('Should render all components correctly', () => {
    const wrapper = render(<KeepTalkingPage />);
    const backgroundImageNode = wrapper.getByTestId(
      KeepTalkingPageIds.backgroundImage,
    );
    const cardsNode = wrapper.queryAllByTestId(KeepTalkingPageIds.card);
    const callToAction = wrapper.getByTestId(KeepTalkingPageIds.callToAction);

    expect(backgroundImageNode).toBeInTheDocument();
    expect(callToAction).toBeInTheDocument();
    expect(cardsNode.length).toBe(0);
  });
});
