import React from 'react';
import {render} from '@testing-library/react-native';
import Toast from '..';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.useFakeTimers();
describe('Toast Component', () => {
  it('should render the message when isShow is true', () => {
    const {getByText} = render(
      <Toast isShow={true} type="success" mensage="Test Message" />,
    );
    expect(getByText('Test Message')).toBeTruthy();
  });

  it('should not render the message when isShow is false', () => {
    const {queryByText} = render(
      <Toast isShow={false} type="success" mensage="Test Message" />,
    );
    expect(queryByText('Test Message')).toBeNull();
  });

});
