import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ModalInfo from '..';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('ModalInfo Component', () => {
  it('should render the modal with correct text', () => {
    const {getByText} = render(<ModalInfo name="Test Product" cardId={1} />);
    expect(
      getByText('¿Estás seguro de eliminar el producto Test Product?'),
    ).toBeTruthy();
  });

  it('should animate fade in on mount', async () => {
    const {getByTestId} = render(<ModalInfo />);
    const animatedView = getByTestId('modal-info');

    await waitFor(() => {
      expect(animatedView.props.style.opacity).toBeCloseTo(0.9, 5);
    });
  });
});
