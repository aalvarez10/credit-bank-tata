import React from 'react';
import { render } from '@testing-library/react-native';
import LabelInfo from '..';
import { defineStyles } from '../styles';

describe('LabelInfo', () => {
    const defineStyleMock = jest.fn(() => {
        return defineStyles();
      });

  it('renders correctly with given label and detail', () => {
    const { getByText } = render(<LabelInfo label="Name" detail="Credit Card" />);
    const labelText = getByText('Name');
    const detailText = getByText('Credit Card');
    expect(labelText).toBeTruthy();
    expect(detailText).toBeTruthy();
  });

  it('renders detail as string even if number is provided', () => {
    const { getByText } = render(<LabelInfo label="Age" detail={30} />);
    const detailText = getByText('30');
    expect(detailText).toBeTruthy();
  });

  it('applies styles correctly', () => {
    const { getByText } = render(<LabelInfo label="Test" detail="Detail" />);
    const labelText = getByText('Test');
    const detailText = getByText('Detail');
    
    expect(labelText.props.style).toMatchObject(
      defineStyleMock().textLabel
    );
    expect(detailText.props.style).toMatchObject(defineStyleMock().textInfo);
  });
});