import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { KeepTalkingPage } from '..';
import { KeepTalkingPageIds } from '../../../enums/TestIdLibrary';
import { store } from '../../../store';

describe('<KeepTalkingPage />', () => {
  test('Should render all components correctly', () => {
    const wrapper = render(
      <Provider store={store}>
        <KeepTalkingPage />
      </Provider>,
    );
    const backgroundImageNode = wrapper.getByTestId(KeepTalkingPageIds.backgroundImage);
    const cardsNode = wrapper.queryAllByTestId(KeepTalkingPageIds.card);
    const callToAction = wrapper.getByTestId(KeepTalkingPageIds.callToAction);

    expect(backgroundImageNode).toBeInTheDocument();
    expect(callToAction).toBeInTheDocument();
    expect(cardsNode.length).toBe(3);
  });
});
