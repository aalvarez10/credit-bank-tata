import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SelectableCard from '..'

describe('SelectableCard Component', () => {
  const card = { name: 'Test Card', id: 123 };
  const navigation = { push: jest.fn() };

  it('should render card name and id', () => {
    const { getByText } = render(<SelectableCard card={card} navigation={navigation} />);
    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('ID: 123')).toBeTruthy();
  });

  it('should navigate to CreditCardDetail with correct parameters when pressed', () => {
    const { getByText } = render(<SelectableCard card={card} navigation={navigation} />);
    fireEvent.press(getByText('Test Card'));
    expect(navigation.push).toHaveBeenCalledWith('CreditCardDetail', { cardInfo: card });
  });
});