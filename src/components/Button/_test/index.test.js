import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '..'

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  it('should render the button with the given name', () => {
    const { getByText } = render(
      <Button name="Test Button" type="primary" onPress={mockOnPress} />
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress when the button is pressed', () => {
    const { getByText } = render(
      <Button name="Test Button" type="primary" onPress={mockOnPress} />
    );
    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should show ActivityIndicator when isLoading is true', () => {
    const { getByTestId, queryByText } = render(
      <Button name="Test Button" type="primary" onPress={mockOnPress} isLoading={true} />
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
    expect(queryByText('Test Button')).toBeNull();
  });

  it('should not show ActivityIndicator when isLoading is false', () => {
    const { queryByTestId, getByText } = render(
      <Button name="Test Button" type="primary" onPress={mockOnPress} isLoading={false} />
    );
    expect(queryByTestId('loading-indicator')).toBeNull();
    expect(getByText('Test Button')).toBeTruthy();
  });
});